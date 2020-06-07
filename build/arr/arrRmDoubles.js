"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defaultCompareFunc(entry1, entry2) {
    return entry1 === entry2;
}
function arrRmDoubles(arr, compareFunc = defaultCompareFunc) {
    let newArr = [];
    for (let a = 0; a < arr.length; a++) {
        let foundDouble = false;
        for (let b = 0; b < newArr.length; b++) {
            if (compareFunc(arr[a], newArr[b]))
                foundDouble = true;
        }
        if (!foundDouble)
            newArr[newArr.length] = arr[a];
    }
    return newArr;
}
exports.arrRmDoubles = arrRmDoubles;
