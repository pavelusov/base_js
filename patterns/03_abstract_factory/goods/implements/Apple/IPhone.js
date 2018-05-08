"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IPhone = /** @class */ (function () {
    function IPhone() {
    }
    IPhone.prototype.buy = function () {
        console.log("Buy IPhone");
    };
    IPhone.prototype.info = function () {
        return this.desc;
    };
    return IPhone;
}());
exports.IPhone = IPhone;
