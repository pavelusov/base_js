"use strict";

function Person(name, age) {
    // state object
    this.name = name;
    this.age = age;
}
// behavior object
Person.prototype.speak = function () {
    console.log("Name: " + this.name + ". Age: " + this.age + ".");
};

var person1 = new Person("Pavel", 34);
var person2 = new Person("Igor", 44);

// Отлично! Один метод на несколько экземпляров Person
var person1 = new Person("Pavel", 34);
var person2 = new Person("Igor", 44);
var good = person1.speak === person2.speak; //true !!!
