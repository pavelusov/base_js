"use strict";

var makeCounter = function makeCounter(count) {
    return function () {
        return count++;
    };
};

var counter1 = makeCounter(1);
counter1();
counter1();
counter1();

var createScream = function createScream(logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!");
    };
};

var createScream2 = function createScream2(logger) {
    return function (message) {
        return logger(message.toUpperCase() + " !!!");
    };
};
//# sourceMappingURL=foo.js.map