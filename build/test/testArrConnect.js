"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const darkLib = require("../index");
async function default_1() {
    console.log("\n\n-------- arrConnect");
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let b = [10, 11, 12, 13, 14];
    console.log(a, b);
    let x = new Date();
    let c = darkLib.arrConnects([a, b]);
    let y = new Date();
    console.log("arrConnect took " + (y.getTime() - x.getTime()) + "ms");
    console.log(c);
}
exports.default = default_1;
