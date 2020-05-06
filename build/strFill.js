"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strFill(str, lng, direction = true, char = " ") {
    while (str.length < lng) {
        if (direction) {
            str = str + char;
        }
        else {
            str = char + str;
        }
    }
    return str;
}
exports.strFill = strFill;
