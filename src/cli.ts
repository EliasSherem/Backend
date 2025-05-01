import { readFileSync } from 'node:fs';
import {parseArgs} from 'node:util';

const parsingOptions = {
    name: {type: "string", required: true} as const,
    description: {type: "string"} as const,
};
function main(){
    const args = parseArgs({options: parsingOptions});
    const data = readFileSync("C:/Users/shere/OneDrive/EBIS/Backend/tasks.json", "utf-8")
    console.log(data);
}
main();