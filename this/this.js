"use strict";

var color = "blue";

test("green");

function test() {
    //this.color = "brown";

    var color = "red";
    //var brown = this.color;
    var color2 = "green";
}

var obj1 = {
    color: "brown",
    getColor: function () {
        this.color;
    },
    testObj: {t:1}
};
var obj2 = {
    color: "red",
    getColor: getColorFoo
};
function getColorFoo() {
    this.color;
}
obj1.getColor();
obj2.getColor();

getColorFoo.call(obj1);


for (var i = 0; i < 2; i++) {
    console.log(i);
}

console.log(i);
console.log(i);
var i; // undefined
var u;
console.log(i);
console.log(u);
