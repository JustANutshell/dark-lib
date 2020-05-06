"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrEntryTypePickType;
(function (arrEntryTypePickType) {
    arrEntryTypePickType[arrEntryTypePickType["first"] = 0] = "first";
    arrEntryTypePickType[arrEntryTypePickType["lastWhenTrue"] = 1] = "lastWhenTrue";
    arrEntryTypePickType[arrEntryTypePickType["last"] = 2] = "last";
})(arrEntryTypePickType || (arrEntryTypePickType = {}));
function defaultEntryDetectFunction(entry) {
    return entry !== undefined && entry !== null;
}
function defaultMissEntryDetectFunction(entry) {
    return entry === undefined || entry === null;
}
function arrEntry(arr, pickType, fromBeginning, func) {
    // first: true: first | false: last
    let a = fromBeginning ? 0 : arr.length - 1;
    let cached = { existing: false };
    while ((function () {
        if (fromBeginning) {
            return a < arr.length;
        }
        else {
            return a >= 0;
        }
    })()) {
        if (func(arr[a])) {
            let b = { existing: true, value: arr[a], index: a };
            switch (pickType) {
                case arrEntryTypePickType.first:
                    return b;
                    break;
                case arrEntryTypePickType.lastWhenTrue:
                    cached = b;
                    break;
                case arrEntryTypePickType.last:
                    cached = b;
                    break;
            }
        }
        else if (pickType === arrEntryTypePickType.lastWhenTrue) {
            return cached;
        }
        if (fromBeginning) {
            a++;
        }
        else {
            a--;
        }
    }
    return cached;
}
exports.arrEntry = arrEntry;
/*
     - : miss entry
     X : Entry
    (?): Selected
*/
function arrEntryGetFirstEntry(arr, func = defaultEntryDetectFunction) {
    // ---(X)XX---XXX---
    return arrEntry(arr, arrEntryTypePickType.first, true, func);
}
exports.arrEntryGetFirstEntry = arrEntryGetFirstEntry;
function arrEntryGetLastFirstMissEntry(arr, func = defaultMissEntryDetectFunction) {
    // --(-)XXX---XXX---
    return arrEntry(arr, arrEntryTypePickType.lastWhenTrue, true, func);
}
exports.arrEntryGetLastFirstMissEntry = arrEntryGetLastFirstMissEntry;
function arrEntryGetFirstMissEntry(arr, func = defaultMissEntryDetectFunction) {
    // (-)--XXX---XXX---
    return arrEntry(arr, arrEntryTypePickType.first, true, func);
}
exports.arrEntryGetFirstMissEntry = arrEntryGetFirstMissEntry;
function arrEntryGetLastEntry(arr, func = defaultEntryDetectFunction) {
    // ---XXX---XX(X)---
    return arrEntry(arr, arrEntryTypePickType.first, false, func);
}
exports.arrEntryGetLastEntry = arrEntryGetLastEntry;
function arrEntryGetFirstLastMissEntry(arr, func = defaultMissEntryDetectFunction) {
    // ---XXX---XXX(-)--
    return arrEntry(arr, arrEntryTypePickType.lastWhenTrue, false, func);
}
exports.arrEntryGetFirstLastMissEntry = arrEntryGetFirstLastMissEntry;
function arrEntryGetLastMissEntry(arr, func = defaultMissEntryDetectFunction) {
    // ---XXX---XXX--(-)
    return arrEntry(arr, arrEntryTypePickType.first, false, func);
}
exports.arrEntryGetLastMissEntry = arrEntryGetLastMissEntry;
