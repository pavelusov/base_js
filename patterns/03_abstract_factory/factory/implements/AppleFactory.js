"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IPhone_1 = require("../../goods/implements/Apple/IPhone");
var MacBook_1 = require("../../goods/implements/Apple/MacBook");
var AppleFactory = /** @class */ (function () {
    function AppleFactory() {
    }
    AppleFactory.prototype.createPhone = function () {
        return new IPhone_1.IPhone;
    };
    AppleFactory.prototype.createComputer = function () {
        return new MacBook_1.MacBook;
    };
    return AppleFactory;
}());
exports.AppleFactory = AppleFactory;
