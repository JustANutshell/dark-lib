"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const darkLib = require("../index");
const timer_1 = require("./timer");
async function default_1() {
    console.log("\n\n-------- arrRmEntry");
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    console.log(a.join(" "));
    new timer_1.default("arrRmEntry").end(darkLib.arrRmEntry(a, [2, 4, 6, 8], [13]));
}
exports.default = default_1;
