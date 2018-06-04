"use strict";

// Деструктурирующее присваивание

var person = {
    name: "Pavel",
    age: 34
};

var name = person.name,
    age = person.age;


var showName = function showName(_ref) {
    var name = _ref.name;

    console.log("My name is " + name);
};
showName(person);

var _ref2 = ["pavel", "igor"],
    firstName = _ref2[0];

// Расширения объектных литералов

var showName2 = function showName2() {
    console.log("My name2 is " + name);
};
var person2 = { name: name, age: age, showName2: showName2 };
person2.showName2();

var mark = "Toyota";
var price = 20000;

var auto = {
    mark: mark,
    price: price,
    go: function go() {
        console.log("go " + mark);
    }
};
auto.go();
//# sourceMappingURL=destructurization.js.map