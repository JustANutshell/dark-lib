"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const darkLib = require("../index");
const timer_1 = require("./timer");
async function default_1() {
    console.log("\n\n-------- arrConnect");
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let b = [10, 11, 12, 13, 14];
    console.log(a, b);
    new timer_1.default("arrConnect").end(darkLib.arrConnects([a, b]));
}
exports.default = default_1;
