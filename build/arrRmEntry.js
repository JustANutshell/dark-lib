"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrRmEntry(arr, entriesByValueToRm = [], entriesByIndexToRm = []) {
    let out = [];
    for (let a = 0; a < arr.length; a++) {
        let keep = true;
        for (let b = 0; b < entriesByValueToRm.length && keep; b++) {
            if (entriesByValueToRm[b] === arr[a])
                keep = false;
        }
        for (let b = 0; b < entriesByIndexToRm.length && keep; b++) {
            if (entriesByIndexToRm[b] === a)
                keep = false;
        }
        if (keep) {
            out[out.length] = arr[a];
        }
    }
    return out;
}
exports.arrRmEntry = arrRmEntry;
