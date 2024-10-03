create table files (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
