"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const darkLib = require("../index");
const timer_1 = require("./timer");
async function default_1() {
    console.log("\n\n-------- arrRmDoubles");
    let a = [1, 2, 3, 2, Infinity, 3, 4, -4, 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 5, 7, -Math.PI, Infinity];
    console.log(a.join(" "));
    let x = new timer_1.default("arrRmDoubles");
    console.log(darkLib.arrRmDoubles(a).join(" "));
    x.end();
}
exports.default = default_1;
