# Supabase Setup

## 1. Create a project

Create a new Supabase project, then copy the project URL and anon key into
`.env` (see `.env.example` in the repo root):

```
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

## 2. Run the migration

Apply `migrations/0001_init.sql` via the Supabase CLI or the SQL editor:

```
supabase link --project-ref <project-ref>
supabase db push
```

This creates all 6 tables (`booking_requests`, `cost_guide_leads`,
`self_assessment_submissions`, `quote_submissions`,
`contact_form_submissions`, `services`) with row-level security policies
and pre-seeds the `services` reference table.

Before running the migration, replace `<PROJECT_REF>` in the
`handle_new_booking_request()` function body with your actual project ref
so the trigger calls the deployed Edge Function URL.

## 3. Deploy the notify-new-booking Edge Function

```
supabase functions deploy notify-new-booking
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set NOTIFICATION_EMAIL=info@abqdetailingpros.com
```

Sign up for a [Resend](https://resend.com) account, verify the sending
domain (`albuquerquedetailing.com`), and generate an API key for
`RESEND_API_KEY`.

## 4. Create the public storage bucket

In the Supabase dashboard, create a public storage bucket (e.g. `site-images`)
for hero images, service images, gallery photos, and blog post images:

- Public bucket: yes
- File size limit: 5 MB
- Allowed MIME types: `image/jpeg`, `image/png`, `image/gif`, `image/webp`, `image/svg+xml`

The app's `optimizeImageUrl()` helper (`src/utils/imageOptimization.ts`)
automatically converts `/storage/v1/object/public/...` URLs to the
`/storage/v1/render/image/public/...` transformation endpoint with
`width` and `quality` query params, so uploaded images are served
optimized without any extra code.

## 5. Verify RLS policies

Each table's policies are defined in the migration. In summary:

| Table | Insert | Select |
|---|---|---|
| `booking_requests` | anon, authenticated | authenticated |
| `cost_guide_leads` | anon, authenticated | service_role |
| `self_assessment_submissions` | anon, authenticated | service_role |
| `quote_submissions` | anon, service_role | service_role |
| `contact_form_submissions` | anon, authenticated | service_role |
| `services` | — | anon, authenticated (active only) |
