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
  progress jsonb not null default '{"markedIds":[],"completionCount":0,"log":[],"selections":[],"pinnedDatePlans":[],"claimedRewards":[]}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.love_lottery_progress
alter column progress set default '{"markedIds":[],"completionCount":0,"log":[],"selections":[],"pinnedDatePlans":[],"claimedRewards":[]}'::jsonb;

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

drop policy if exists "Public can update love lottery progress" on public.love_lottery_progress;
create policy "Public can update love lottery progress"
on public.love_lottery_progress
for update
to anon, authenticated
using (true)
with check (
  page_id is not null
  and owner_id is not null
);

create table if not exists public.wishlist_items (
  id uuid primary key default gen_random_uuid(),
  page_id text not null,
  item_name text not null,
  item_url text not null default '',
  note text not null default '',
  added_by text not null default 'Sophia' check (added_by in ('Sophia', 'Calvin')),
  purchased boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.wishlist_items
add column if not exists added_by text not null default 'Sophia';

alter table public.wishlist_items
add column if not exists note text not null default '';

alter table public.wishlist_items
drop constraint if exists wishlist_items_added_by_check;

alter table public.wishlist_items
add constraint wishlist_items_added_by_check
check (added_by in ('Sophia', 'Calvin'));

alter table public.wishlist_items enable row level security;

drop policy if exists "Public can read wishlist items" on public.wishlist_items;
create policy "Public can read wishlist items"
on public.wishlist_items
for select
to anon, authenticated
using (true);

drop policy if exists "Public can add wishlist items" on public.wishlist_items;
create policy "Public can add wishlist items"
on public.wishlist_items
for insert
to anon, authenticated
with check (
  length(trim(item_name)) between 1 and 120
  and (item_url = '' or item_url ~* '^https?://')
  and added_by in ('Sophia', 'Calvin')
);

drop policy if exists "Public can update wishlist items" on public.wishlist_items;
create policy "Public can update wishlist items"
on public.wishlist_items
for update
to anon, authenticated
using (true)
with check (
  length(trim(item_name)) between 1 and 120
  and (item_url = '' or item_url ~* '^https?://')
  and added_by in ('Sophia', 'Calvin')
);

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
