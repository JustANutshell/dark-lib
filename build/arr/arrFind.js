"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrFind(arr, func) {
    for (let a = 0; a < arr.length; a++) {
        if (func(arr[a]))
            return { foundAnything: true, value: arr[a], index: a };
    }
    return { foundAnything: false };
}
exports.arrFind = arrFind;
async function arrFindFuncAsync(arr, func) {
    for (let a = 0; a < arr.length; a++) {
        if (await func(arr[a]))
            return { foundAnything: true, value: arr[a], index: a };
    }
    return { foundAnything: false };
}
exports.arrFindFuncAsync = arrFindFuncAsync;
function arrFindAsync(arr, func) {
    return new Promise(function (resolve, reject) {
        let b = [];
        for (let a = 0; a < arr.length; a++) {
            b[b.length] = new Promise(async function (resolve, reject) {
                try {
                    resolve({ _: await func(arr[a]), value: arr[a], index: a });
                }
                catch (e) {
                    reject(e);
                }
            }).then(function (a) {
                if (a._)
                    resolve({ foundAnything: true, value: a.value, index: a.index });
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
