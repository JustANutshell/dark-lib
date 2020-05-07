"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testArrFind_1 = require("./testArrFind");
const testArrFilter_1 = require("./testArrFilter");
const testArrConnect_1 = require("./testArrConnect");
const testArrRmEntry_1 = require("./testArrRmEntry");
const testArrRmDoubles_1 = require("./testArrRmDoubles");
const testArrEntry_1 = require("./testArrEntry");
function wait(timems = 3000) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, timems);
    });
}
(async function () {
    await wait(10);
    await testArrFind_1.default();
    await wait(20);
    await testArrFilter_1.default();
    await wait(20);
    await testArrConnect_1.default();
    await wait(20);
    await testArrRmEntry_1.default();
    await wait(20);
    await testArrRmDoubles_1.default();
    await wait(20);
    await testArrEntry_1.default();
})();
