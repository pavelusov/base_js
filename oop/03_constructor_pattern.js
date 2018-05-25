// "use strict";

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function () {
        console.log("Name: " + this.name + ". Age: " + this.age + ".");
    };
}


var person1 = new Person("Pavel", 34);
var person2 = new Person("Igor", 44);

// Плохо! У каждого экземпляра Person свой метод speak
// Не один и тот же экземпляр Function
// Нет смысла создавать несколько
// экземпляров Function которые делают одну и туже работу
var good = person1.speak === person2.speak; //false

/*
// In browser. No "use strict".
// Person("myBrowser", 1000);
// window.speak(); //Name: myBrowser. Age: 1000.
*/

// в контексте другого объекта
var obj = new Object();

Person.call(obj, "Pavel", 50);

obj.speak();
