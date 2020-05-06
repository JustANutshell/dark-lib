"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const darkLib = require("../index");
const timer_1 = require("./timer");
async function default_1() {
    console.log("\n\n-------- arrFilter");
    async function x(a) {
        console.log("testArr length:", a.length);
        let b;
        darkLib.arrFilter(a, function (b) { return b == 4; });
        darkLib.arrFilter(a, function (b) { return b == 11; });
        darkLib.arrFilter(a, function (b) { return b > 2; });
        await darkLib.arrFilterFuncAsync(a, async function (b) { return b == 4; });
        await darkLib.arrFilterFuncAsync(a, async function (b) { return b == 11; });
        await darkLib.arrFilterFuncAsync(a, async function (b) { return b > 2; });
        await darkLib.arrFilterAsync(a, function (b) { return b == 4; });
        await darkLib.arrFilterAsync(a, function (b) { return b == 11; });
        await darkLib.arrFilterAsync(a, function (b) { return b > 2; });
        b = new timer_1.default("arrFilter");
        darkLib.arrFilter(a, function (b) { return b == 4; });
        darkLib.arrFilter(a, function (b) { return b == 11; });
        darkLib.arrFilter(a, function (b) { return b > 2; });
        b.end();
        b = new timer_1.default("arrFilterFuncAsync");
        await darkLib.arrFilterFuncAsync(a, async function (b) { return b == 4; });
        await darkLib.arrFilterFuncAsync(a, async function (b) { return b == 11; });
        await darkLib.arrFilterFuncAsync(a, async function (b) { return b > 2; });
        b.end();
        b = new timer_1.default("arrFilterAsync");
        await darkLib.arrFilterAsync(a, function (b) { return b == 4; });
        await darkLib.arrFilterAsync(a, function (b) { return b == 11; });
        await darkLib.arrFilterAsync(a, function (b) { return b > 2; });
        b.end();
    }
    let a = [];
    for (let c = 0; c < 10; c++) {
        a[c] = c;
    }
    console.log(darkLib.arrFilter(a, function (b) { return b == 4; }));
    console.log(darkLib.arrFilter(a, function (b) { return b == 11; }));
    console.log(darkLib.arrFilter(a, function (b) { return b > 2; }));
    console.log(await darkLib.arrFilterFuncAsync(a, async function (b) { return b == 4; }));
    console.log(await darkLib.arrFilterFuncAsync(a, async function (b) { return b == 11; }));
    console.log(await darkLib.arrFilterFuncAsync(a, async function (b) { return b > 2; }));
    console.log(await darkLib.arrFilterAsync(a, function (b) { return b == 4; }));
    console.log(await darkLib.arrFilterAsync(a, function (b) { return b == 11; }));
    console.log(await darkLib.arrFilterAsync(a, function (b) { return b > 2; }));
    await x(a);
    for (let c = 10; c < 10000; c++) {
        a[c] = c;
    }
    await x(a);
}
exports.default = default_1;
