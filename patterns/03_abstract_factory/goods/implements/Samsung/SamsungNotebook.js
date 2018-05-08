"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SamsungNotebook = /** @class */ (function () {
    function SamsungNotebook() {
    }
    SamsungNotebook.prototype.buy = function () {
        console.log("Buy the Samsung Notebook");
    };
    SamsungNotebook.prototype.info = function () {
        return this.desc;
    };
    return SamsungNotebook;
}());
exports.SamsungNotebook = SamsungNotebook;
