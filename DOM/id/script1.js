"use strict";

for (var key in window) {
    if (key === "innerHeight") {
        console.log("innerHeight found")
    }
    if (key === "myId") {
        console.log("myId found")
    }
}
// myId.innerText = "TEST";
console.log();

var element = document.getElementById('myId');
var myId = document.querySelector('.myTitle');
console.log(element === myId);
