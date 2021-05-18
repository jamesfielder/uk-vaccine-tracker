import { htmlRead } from './html.ts';
import { readJSON, writeJSON } from 'https://deno.land/x/flat/mod.ts';
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

const sentencesPath = './sentences.json';

const filename = Deno.args[0];
const text = await Deno.readTextFile(filename);

console.log("Reading html into sentences");

const s: Array<string> = htmlRead(text);

console.log("Read current sentences.json");
const current: Array<any> = await readJSON(sentencesPath);

console.log("Add new sentences");
current.push({
    sentences: [...s],
    datetime: format(new Date(), "yyyy-MM-dd HH:mm:ss")
});

// console.log(JSON.stringify(current));
console.log("Write new sentences into json array");
await writeJSON(sentencesPath, current);

