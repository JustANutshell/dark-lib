"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrFilter(arr, func) {
    let out = { content: [] };
    for (let a = 0; a < arr.length; a++) {
        if (func(arr[a]))
            out.content[out.content.length] = { value: arr[a], index: a };
    }
    return out;
}
exports.arrFilter = arrFilter;
async function arrFilterFuncAsync(arr, func) {
    let out = { content: [] };
    for (let a = 0; a < arr.length; a++) {
        if (await func(arr[a]))
            out.content[out.content.length] = { value: arr[a], index: a };
    }
    return out;
}
exports.arrFilterFuncAsync = arrFilterFuncAsync;
function arrFilterAsync(arr, func) {
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
            });
        }
        Promise.all(b).then(function (a) {
            let out = { content: [] };
            for (let c = 0; c < a.length; c++) {
                if (a[c]._)
                    out.content[out.content.length] = { value: a[c].value, index: a[c].index };
            }
            resolve(out);
        }).catch(function (e) {
            reject(e);
        });
    });
}
exports.arrFilterAsync = arrFilterAsync;
