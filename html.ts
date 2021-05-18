import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

// #maincontent > article:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > ul:nth-child(3) > li:nth-child(1)

export function htmlRead(page: string): Array<string> {
    // console.log(page);
    const $ = cheerio.load(page);

    // const read = 

    let out: Array<string> = []
    
    $('#maincontent > article > div > div > section:nth-child(2) > ul > li').each(function(i, elm) {
        out.push($(elm).text());
    });;

    console.log(out);

    return [];
}