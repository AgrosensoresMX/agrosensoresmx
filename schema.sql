-- ══════════════════════════════════════════════════════════
-- AGROSENSORES MX — Cotizador Export
-- Schema v1.0
-- ══════════════════════════════════════════════════════════

-- ── Enable UUID extension ─────────────────────────────────
create extension if not exists "uuid-ossp";

-- ── BUYERS ───────────────────────────────────────────────
create table if not exists public.buyers (
  id            uuid primary key default uuid_generate_v4(),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  -- Contact
  full_name     text not null,
  job_title     text,
  email         text,
  phone         text,
  -- Company
  company_name  text not null,
  address       text,
  city          text,
  region        text,
  zip_code      text,
  country       text,
  -- Fiscal & banking
  tax_id        text,
  import_permit text,
  bank_name     text,
  swift_bic     text,
  -- Destination
  airport_name  text,
  iata_code     text,
  notes         text,
  -- Ownership
  created_by    uuid references auth.users(id) on delete set null
);

-- ── QUOTES ───────────────────────────────────────────────
create table if not exists public.quotes (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  -- Header
  quote_number    text not null,
  issue_date      date not null default current_date,
  expiry_date     date not null default (current_date + interval '15 days'),
  incoterm        text not null default 'CPT' check (incoterm in ('CPT','EXW')),
  hs_code         text not null default '1212 99 99 00',
  payment_terms   text,
  delivery_date   date,
  fx_eur          numeric(10,4) not null default 1.08,
  -- Buyer (snapshot + FK)
  buyer_id        uuid references public.buyers(id) on delete set null,
  buyer_snapshot  jsonb,          -- copy of buyer data at time of quote
  -- Blocks (full state as JSON)
  products        jsonb not null default '[]',
  origin_airport  text,
  origin_iata     text default 'GDL',
  logistics_b2    jsonb not null default '{}',
  logistics_b3    jsonb not null default '{}',
  logistics_b4    jsonb not null default '{}',
  -- Computed totals (stored for dashboard display)
  total_exw       numeric(12,2),
  total_b2        numeric(12,2),
  total_b3        numeric(12,2),
  total_b4        numeric(12,2),
  total_insurance numeric(12,2),
  total_cpt       numeric(12,2),
  total_qty       integer,
  unit_price_cpt  numeric(12,4),
  -- Status
  status          text not null default 'draft'
                  check (status in ('draft','sent','accepted','rejected','expired')),
  -- Ownership
  created_by      uuid references auth.users(id) on delete set null
);

-- ── PRODUCTS CATALOG ─────────────────────────────────────
create table if not exists public.products_catalog (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),
  sort_order      integer not null default 0,
  active          boolean not null default true,
  name            text not null,
  variety         text,
  unit            text not null default 'piece',
  price_exw_usd   numeric(10,4) not null default 0,
  pcs_per_box     integer not null default 1,
  boxes_per_pallet integer not null default 1,
  box_gross_kg    numeric(8,3) not null default 0,
  pallet_gross_kg numeric(8,2) not null default 0,
  moq             integer not null default 1,
  notes           text,
  created_by      uuid references auth.users(id) on delete set null
);

-- ── UPDATED_AT triggers ───────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger buyers_updated_at
  before update on public.buyers
  for each row execute function public.set_updated_at();

create trigger quotes_updated_at
  before update on public.quotes
  for each row execute function public.set_updated_at();

-- ── ROW LEVEL SECURITY ────────────────────────────────────
alter table public.buyers          enable row level security;
alter table public.quotes          enable row level security;
alter table public.products_catalog enable row level security;

-- Only authenticated users can read/write their own data
create policy "auth_all_buyers" on public.buyers
  for all to authenticated
  using (auth.uid() = created_by)
  with check (auth.uid() = created_by);

create policy "auth_all_quotes" on public.quotes
  for all to authenticated
  using (auth.uid() = created_by)
  with check (auth.uid() = created_by);

create policy "auth_read_catalog" on public.products_catalog
  for select to authenticated using (true);

create policy "auth_write_catalog" on public.products_catalog
  for all to authenticated
  using (auth.uid() = created_by)
  with check (auth.uid() = created_by);

-- ── DEFAULT PRODUCTS CATALOG ──────────────────────────────
insert into public.products_catalog
  (sort_order, name, variety, unit, price_exw_usd, pcs_per_box, boxes_per_pallet, box_gross_kg, pallet_gross_kg, moq)
values
  (1, 'Avocado Pattern Seed (Mixed)',    'Antillana / Mexicola', 'seed',  0.46,  460, 56, 4.06, 250.00, 15000),
  (2, 'Avocado Pattern Seed',            'Antillana',            'seed',  0.46,  460, 56, 4.06, 250.00, 15000),
  (3, 'Avocado Pattern Seed',            'Mexicola',             'seed',  0.46,  460, 56, 4.06, 250.00, 15000),
  (4, 'Hass Grafted Plant',              'Hass',                 'plant', 8.90,  6,   20, 3.50, 100.00, 250),
  (5, 'Biloxi Blueberry (in vitro)',     'Biloxi',               'plant', 7.80,  12,  24, 3.00, 90.00,  250),
  (6, 'Pecan Grafted Plant — Wichita',   'Wichita',              'plant', 17.25, 4,   16, 3.50, 80.00,  100),
  (7, 'Reforestation — Pino Michoacano', 'Pinus michoacana',     'plant', 1.75,  50,  40, 4.00, 220.00, 500);
