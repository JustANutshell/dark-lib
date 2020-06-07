"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrConnects(arrArr = []) {
    let out = [];
    for (let a = 0; a < arrArr.length; a++) {
        for (let b = 0; b < arrArr[a].length; b++) {
            out[out.length] = arrArr[a][b];
        }
    }
    return out;
}
exports.arrConnects = arrConnects;
