"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppleFactory_1 = require("./factory/implements/AppleFactory");
var SamsungFactory_1 = require("./factory/implements/SamsungFactory");
var factory;
var manufacturer = "Samsung";
switch (manufacturer) {
    case "Apple":
        factory = new AppleFactory_1.AppleFactory();
        break;
    case "Samsung":
        factory = new SamsungFactory_1.SamsungFactory();
        break;
}
var computer = factory.createComputer();
var phone = factory.createPhone();
computer.buy();
phone.buy();
