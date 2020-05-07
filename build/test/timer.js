"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const darkLib = require("../index");
// testing for strFill in timer
class timer {
    constructor(name, expectedTimeLength = 3) {
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expectedTimeLength", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.start = new Date();
        this.name = name;
        this.expectedTimeLength = expectedTimeLength;
    }
    end(out = "") {
        let d = new Date();
        console.log(darkLib.strFill(this.name, 20, true, " ") + ":" + darkLib.strFill(String(d.getTime() - this.start.getTime()), this.expectedTimeLength + 1, false, " ") + "ms", out);
    }
}
exports.default = timer;
