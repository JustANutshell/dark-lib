"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrFind(arr, func) {
    if (!Array.isArray(arr))
        throw "arr wasn't array";
    for (let a = 0; a < arr.length; a++) {
        if (func(arr[a]))
            return { foundAnything: true, foundValue: arr[a], foundIndex: a };
    }
    return { foundAnything: false };
}
exports.arrFind = arrFind;
function arrFindAsync(arr, func) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(arr))
            throw "arr wasn't array";
        let b = [];
        for (let a = 0; a < arr.length; a++) {
            b[b.length] = new Promise(function (resolve, reject) {
                resolve({ _: func(arr[a]), value: arr[a], index: a });
            }).then(function (a) {
                if (a._)
                    resolve({ foundAnything: true, foundValue: a.value, foundIndex: a.index });
            }).catch(function (e) {
                reject(e);
            });
        }
        Promise.all(b).then(function (a) {
            resolve({ foundAnything: false });
        }).catch(function (e) {
            reject(e);
        });
    });
}
exports.arrFindAsync = arrFindAsync;
