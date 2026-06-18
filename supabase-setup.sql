-- ============================================================
-- Virtual Enterprises — Supabase schema for the website CMS
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- ============================================================

-- 1. Content table: one row per editable section, content stored as JSON
create table if not exists public.site_content (
  section    text primary key,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- 2. Enable Row Level Security
alter table public.site_content enable row level security;

-- 3. Anyone (the public website) may READ content
drop policy if exists "public read" on public.site_content;
create policy "public read"
  on public.site_content
  for select
  using (true);

-- 4. Only logged-in admins may WRITE content
drop policy if exists "auth write" on public.site_content;
create policy "auth write"
  on public.site_content
  for all
  to authenticated
  using (true)
  with check (true);

-- Done. Next: create your admin login user (see setup guide step 4).
