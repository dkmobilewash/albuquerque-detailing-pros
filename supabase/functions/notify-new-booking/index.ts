// Supabase Edge Function: notify-new-booking
// Triggered by the `on_booking_request_created` database trigger whenever a
// new row is inserted into `booking_requests`. Sends a styled HTML email via
// the Resend API to notify staff of the new booking.
//
// Deploy: supabase functions deploy notify-new-booking
// Secrets: supabase secrets set RESEND_API_KEY=your_resend_api_key

import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const NOTIFICATION_EMAIL = Deno.env.get('NOTIFICATION_EMAIL') ?? 'info@abqdetailingpros.com';
const FROM_ADDRESS = 'Albuquerque Detailing Pros <bookings@albuquerquedetailing.com>';

interface BookingPayload {
  id: string;
  name: string;
  phone: string;
  year?: string;
  make_model?: string;
}

function buildEmailHtml(booking: BookingPayload): string {
  const vehicle = `${booking.year ?? ''} ${booking.make_model ?? ''}`.trim() || 'Not provided';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
      <div style="background: #000000; color: #ffffff; padding: 20px 24px;">
        <h1 style="margin: 0; font-size: 18px;">New Booking Request</h1>
      </div>
      <div style="padding: 24px;">
        <p style="margin: 0 0 16px; background: #fff4e5; border: 1px solid #ffdca8; color: #92400e; padding: 10px 14px; border-radius: 6px; font-size: 13px; font-weight: bold;">
          Action Required: Call the customer within 24 hours to confirm.
        </p>
        <table style="width: 100%; font-size: 14px; color: #111827;">
          <tr><td style="padding: 6px 0; font-weight: bold; width: 120px;">Name</td><td>${booking.name}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Phone</td><td>${booking.phone}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Vehicle</td><td>${vehicle}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Request ID</td><td>${booking.id}</td></tr>
        </table>
      </div>
    </div>
  `;
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return new Response(JSON.stringify({ error: 'Email service not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const booking: BookingPayload = await req.json();

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [NOTIFICATION_EMAIL],
        subject: `New Booking Request - ${booking.year ?? ''} ${booking.make_model ?? ''}`.trim(),
        html: buildEmailHtml(booking),
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Resend API error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to send notification email' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('notify-new-booking error:', error);
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
