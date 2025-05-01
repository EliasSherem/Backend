"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const node_util_1 = require("node:util");
const parsingOptions = {
    name: { type: "string", required: true },
    description: { type: "string" },
};
function main() {
    const args = (0, node_util_1.parseArgs)({ options: parsingOptions });
    const data = (0, node_fs_1.readFileSync)("C:/Users/shere/OneDrive/EBIS/Backend/tasks.json", "utf-8");
    console.log(data);
}
main();
