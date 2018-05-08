"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MacBook = /** @class */ (function () {
    function MacBook() {
    }
    MacBook.prototype.buy = function () {
        console.log("Buy MacBook");
    };
    MacBook.prototype.info = function () {
        return this.desc;
    };
    return MacBook;
}());
exports.MacBook = MacBook;
