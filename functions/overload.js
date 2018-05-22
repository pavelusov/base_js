"use strict";

function print() {
    switch (true) {
        case typeof arguments[0] === "number":
            console.log("Это число " + arguments[0]);
            break;
        case typeof arguments[0] === "string":
            console.log("Это строка " + arguments[0]);
            break;
        default:
            break;
    }
}

print(20);
print("text");
