-- Albuquerque Detailing Pros — initial schema
-- Run via: supabase db push  (or paste into the Supabase SQL editor)

create extension if not exists "pgcrypto";
create extension if not exists "pg_net";

-- ============================================================
-- booking_requests
-- ============================================================
create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  year text,
  make_model text,
  email text,
  service text,
  location text,
  message text,
  source_page text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.booking_requests enable row level security;

create policy "Anyone can submit a booking request"
  on public.booking_requests for insert
  to anon, authenticated
  with check (true);

create policy "Authenticated staff can view booking requests"
  on public.booking_requests for select
  to authenticated
  using (true);

create policy "Authenticated staff can update booking requests"
  on public.booking_requests for update
  to authenticated
  using (true);

-- ============================================================
-- cost_guide_leads
-- ============================================================
create table if not exists public.cost_guide_leads (
  id uuid primary key default gen_random_uuid(),
  contact text not null,
  contact_type text not null check (contact_type in ('email', 'phone')),
  source_page text,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.cost_guide_leads enable row level security;

create policy "Anyone can submit a cost guide lead"
  on public.cost_guide_leads for insert
  to anon, authenticated
  with check (true);

create policy "Service role can view cost guide leads"
  on public.cost_guide_leads for select
  to service_role
  using (true);

-- ============================================================
-- self_assessment_submissions
-- ============================================================
create table if not exists public.self_assessment_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  phone text not null,
  question_1 boolean not null default false,
  question_2 boolean not null default false,
  question_3 boolean not null default false,
  question_4 boolean not null default false,
  yes_count int not null default 0,
  assessment_result text not null,
  contacted boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.self_assessment_submissions enable row level security;

create policy "Anyone can submit a self assessment"
  on public.self_assessment_submissions for insert
  to anon, authenticated
  with check (true);

create policy "Service role can view self assessments"
  on public.self_assessment_submissions for select
  to service_role
  using (true);

-- ============================================================
-- quote_submissions
-- ============================================================
create table if not exists public.quote_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  vehicle text,
  created_at timestamptz not null default now()
);

alter table public.quote_submissions enable row level security;

create policy "Anyone can submit a quote request"
  on public.quote_submissions for insert
  to anon, service_role
  with check (true);

create policy "Service role can view quote submissions"
  on public.quote_submissions for select
  to service_role
  using (true);

-- ============================================================
-- contact_form_submissions
-- ============================================================
create table if not exists public.contact_form_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  service_interest text,
  contacted boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.contact_form_submissions enable row level security;

create policy "Anyone can submit a contact form"
  on public.contact_form_submissions for insert
  to anon, authenticated
  with check (true);

create policy "Service role can view contact form submissions"
  on public.contact_form_submissions for select
  to service_role
  using (true);

-- ============================================================
-- services (reference table)
-- ============================================================
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  base_price numeric(10, 2),
  duration_minutes int,
  is_active boolean not null default true
);

alter table public.services enable row level security;

create policy "Public can view active services"
  on public.services for select
  to anon, authenticated
  using (is_active = true);

insert into public.services (name, slug, description, base_price, duration_minutes) values
  ('Mobile Auto Detailing', 'mobile-auto-detailing', 'Full interior and exterior detailing that comes to your driveway, office, or job site.', 150.00, 180),
  ('Interior Detailing', 'interior-detailing', 'Deep vacuuming, steam cleaning, stain extraction, and conditioning for every interior surface.', 100.00, 120),
  ('Exterior Detailing', 'exterior-detailing', 'Hand wash, clay bar decontamination, and gloss-enhancing wax.', 120.00, 120),
  ('Paint Correction', 'paint-correction', 'Machine polishing that removes swirl marks, oxidation, and light scratches.', 350.00, 360),
  ('Ceramic Coating', 'ceramic-coating', 'Multi-year nano-ceramic paint protection built for New Mexico conditions.', 500.00, 480),
  ('Headlight Restoration', 'headlight-restoration', 'Removes UV oxidation and yellowing to restore clarity and safety.', 80.00, 60),
  ('Engine Bay Detailing', 'engine-bay-detailing', 'Safe degreasing and dressing of your engine bay.', 100.00, 90),
  ('Fleet & Commercial Detailing', 'fleet-commercial-detailing', 'Recurring on-site washing and detailing programs for fleets and dealerships.', 200.00, 180)
on conflict (slug) do nothing;

-- ============================================================
-- Trigger: notify-new-booking Edge Function on new booking_requests row
-- ============================================================
-- Replace <PROJECT_REF> and set app.settings.edge_function_secret via
-- `alter database postgres set app.settings.edge_function_secret = '...'`
-- or store the value as a Vault secret and reference it here instead.

create or replace function public.handle_new_booking_request()
returns trigger
language plpgsql
security definer
as $$
begin
  perform net.http_post(
    url := 'https://<PROJECT_REF>.supabase.co/functions/v1/notify-new-booking',
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := jsonb_build_object(
      'id', new.id,
      'name', new.name,
      'phone', new.phone,
      'year', new.year,
      'make_model', new.make_model
    )
  );
  return new;
end;
$$;

drop trigger if exists on_booking_request_created on public.booking_requests;

create trigger on_booking_request_created
  after insert on public.booking_requests
  for each row
  execute function public.handle_new_booking_request();
