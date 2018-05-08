"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SamsungNotebook_1 = require("../../goods/implements/Samsung/SamsungNotebook");
var SamsungPhone_1 = require("../../goods/implements/Samsung/SamsungPhone");
var SamsungFactory = /** @class */ (function () {
    function SamsungFactory() {
    }
    SamsungFactory.prototype.createPhone = function () {
        return new SamsungPhone_1.SamsungPhone;
    };
    SamsungFactory.prototype.createComputer = function () {
        return new SamsungNotebook_1.SamsungNotebook;
    };
    return SamsungFactory;
}());
exports.SamsungFactory = SamsungFactory;
