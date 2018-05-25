"use strict";

function createPerson(name,age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.speak = function () {
      console.log("Name: " + this.name + ". Age: " + this.age + ".");
    };
    return obj;
}

var person1 = createPerson("Pavel", 23);
var person2 = createPerson("Igor", 45);
person1.speak();
