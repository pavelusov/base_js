"use strict";
function outer() {
    console.log("I'm outer foo");
    inner();
}

function inner() {
    console.log("I'm inner foo");
    var caller = inner.caller;
    console.log(caller);
}

outer();
