"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testArrFind_1 = require("./testArrFind");
const testArrFilter_1 = require("./testArrFilter");
const testArrConnect_1 = require("./testArrConnect");
const testArrRmEntry_1 = require("./testArrRmEntry");
function wait(timems = 3000) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, timems);
    });
}
(async function () {
    wait(100);
    await testArrFind_1.default();
    wait(200);
    await testArrFilter_1.default();
    wait(200);
    await testArrConnect_1.default();
    wait(200);
    await testArrRmEntry_1.default();
})();
