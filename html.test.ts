import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { htmlRead } from './html.ts';

// Not a unit test per se, just a test harness for local testing
Deno.test("Read html correctly", async () => {
    const filename = "test-data/index.html";
    const text = await Deno.readTextFile(filename);

    htmlRead(text);
});