import { expectTypeOf, test } from "vitest";
import { createClient } from "@supabase/supabase-js";
import { Database, Tables } from "./supabase-db";

const supabase = createClient<Database>("http://localhost:3000", "test");

test("computed relationships", async () => {
  const { data, error } = await supabase
    .from("booking")
    .select(`id, hotel!inner(id,name)`);
  if (error) {
    // ignore
  }
  expectTypeOf(data).toEqualTypeOf<Array<{
    id: number;
    hotel: Pick<Tables<"hotel">, "id" | "name">;
  }> | null>();
});
