-- Run this in the Supabase SQL editor.
-- The app reads one public JSON page and only authenticated users can edit it.

create table if not exists public.constellation_pages (
  id text primary key,
  owner_id uuid not null references auth.users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.constellation_pages enable row level security;

drop policy if exists "Public can read constellation pages" on public.constellation_pages;
create policy "Public can read constellation pages"
on public.constellation_pages
for select
to anon, authenticated
using (true);

drop policy if exists "Authenticated owner can insert constellation pages" on public.constellation_pages;
create policy "Authenticated owner can insert constellation pages"
on public.constellation_pages
for insert
to authenticated
with check ((select auth.uid()) is not null and owner_id = (select auth.uid()));

drop policy if exists "Authenticated owner can update constellation pages" on public.constellation_pages;
create policy "Authenticated owner can update constellation pages"
on public.constellation_pages
for update
to authenticated
using ((select auth.uid()) is not null and owner_id = (select auth.uid()))
with check ((select auth.uid()) is not null and owner_id = (select auth.uid()));

create table if not exists public.love_lottery_progress (
  page_id text primary key references public.constellation_pages(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  progress jsonb not null default '{"markedIds":[],"completionCount":0,"log":[],"nextDatePlan":null}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.love_lottery_progress enable row level security;

drop policy if exists "Public can read love lottery progress" on public.love_lottery_progress;
create policy "Public can read love lottery progress"
on public.love_lottery_progress
for select
to anon, authenticated
using (true);

drop policy if exists "Authenticated owner can insert love lottery progress" on public.love_lottery_progress;
create policy "Authenticated owner can insert love lottery progress"
on public.love_lottery_progress
for insert
to authenticated
with check ((select auth.uid()) is not null and owner_id = (select auth.uid()));

drop policy if exists "Authenticated owner can update love lottery progress" on public.love_lottery_progress;
create policy "Authenticated owner can update love lottery progress"
on public.love_lottery_progress
for update
to authenticated
using ((select auth.uid()) is not null and owner_id = (select auth.uid()))
with check ((select auth.uid()) is not null and owner_id = (select auth.uid()));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'constellation-media',
  'constellation-media',
  true,
  52428800,
  array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'audio/mpeg',
    'audio/mp3',
    'audio/wav',
    'audio/x-wav',
    'audio/ogg',
    'audio/webm',
    'audio/aac',
    'audio/x-aac',
    'audio/mp4',
    'audio/x-m4a',
    'audio/flac'
  ]
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can read constellation media" on storage.objects;
create policy "Public can read constellation media"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'constellation-media');

drop policy if exists "Authenticated users can upload their constellation media" on storage.objects;
create policy "Authenticated users can upload their constellation media"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'constellation-media'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

drop policy if exists "Authenticated users can update their constellation media" on storage.objects;
create policy "Authenticated users can update their constellation media"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'constellation-media'
  and (storage.foldername(name))[1] = (select auth.uid())::text
)
with check (
  bucket_id = 'constellation-media'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

drop policy if exists "Authenticated users can delete their constellation media" on storage.objects;
create policy "Authenticated users can delete their constellation media"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'constellation-media'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);
