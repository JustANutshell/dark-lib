"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const darkLib = require("../index");
const timer_1 = require("./timer");
async function default_1() {
    console.log("\n\n-------- arrEntry");
    //		 0,		   1,		 2,		   3,4,5,6,7,8,9,10,11,12,13,14,	   15,		 16,17,18,19,20,21,22,		 23,	   24
    let arr = [undefined, undefined, undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, undefined, undefined, 14, 15, 16, 17, 18, 19, undefined, undefined, undefined];
    let x;
    let y = new timer_1.default("all arrEntry", 2);
    x = new timer_1.default("firstEntry", 2);
    x.end(darkLib.arrEntryGetFirstEntry(arr));
    x = new timer_1.default("lastFirstMissEntry", 2);
    x.end(darkLib.arrEntryGetLastFirstMissEntry(arr));
    x = new timer_1.default("firstMissEntry", 2);
    x.end(darkLib.arrEntryGetFirstMissEntry(arr));
    x = new timer_1.default("lastEntry", 2);
    x.end(darkLib.arrEntryGetLastEntry(arr));
    x = new timer_1.default("firstLastMissEntry", 2);
    x.end(darkLib.arrEntryGetFirstLastMissEntry(arr));
    x = new timer_1.default("lastMissEntry", 2);
    x.end(darkLib.arrEntryGetLastMissEntry(arr));
    y.end(arr.join(','));
}
exports.default = default_1;
