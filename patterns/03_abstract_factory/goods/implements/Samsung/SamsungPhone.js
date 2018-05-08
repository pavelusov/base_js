"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SamsungPhone = /** @class */ (function () {
    function SamsungPhone() {
    }
    SamsungPhone.prototype.buy = function () {
        console.log("Buy the Samsung Phone");
    };
    SamsungPhone.prototype.info = function () {
        return this.desc;
    };
    return SamsungPhone;
}());
exports.SamsungPhone = SamsungPhone;
