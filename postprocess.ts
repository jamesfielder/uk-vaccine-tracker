import { htmlRead } from './html.ts';
import { readJSON, writeJSON } from 'https://deno.land/x/flat/mod.ts';
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

const sentencesPath = './sentences.json';

const filename = Deno.args[0];
const text = await Deno.readTextFile(filename);

console.log("Reading html into sentences");

const sentences: Array<string> = htmlRead(text);
const current: Array<any> = await readJSON(sentencesPath);

current.push({
    sentences: sentences,
    datetime: format(new Date(), "yyyy-MM-dd HH:mm:ss")
});

await writeJSON(sentencesPath, current);