# Supabase-js non-null !inner join issue reproduction

Reproduces issue described in
https://github.com/supabase/supabase-js/issues/1368

## Repro

- Install deps with `pnpm install`
- Run type test `pnpm test`
- Switch to the [`broken`](https://github.com/hmnd/postgrest-computed-rels-repro/tree/broken) branch and repeat
