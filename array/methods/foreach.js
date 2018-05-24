"use strict";

function bit(num) {
    let bits = num.toString(2);
    let arrBits = bits[bits.length - 4];
}

let bits =  bit(10);

function mean(unsort) {

    let sortUp = unsort.slice();
    sortUp.sort(compareUp);

    let sortDown = unsort.slice();
    sortDown.sort(compareDown);
    let length = unsort.length;
    let outArray = [];

    for (var i = 0; i < length; i += 2) {

        outArray[i] = sortUp.pop();
        outArray[i + 1] = sortUp.shift();
    }

    console.log(outArray)

    function compareUp(a, b) {
        return a - b;
    }
    function compareDown(a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    }
}

mean([7,5,2,7,8, -2, 25, 25]);


let n = 0;
let inputArray = [];
let outArray = [];
let exp1 = /[\{] *[\}]/g;
let exp2 = /[\[] *[\]]/g;
let exp3 = /[\(] *[\)]/g;


function braces(values) {
    if (values === n) {
        return;
    }
    if (typeof values === "number") {
        n = values;
        return;
    }

    for (var i = 0; i <= values.length; i++) {
        exp1.test(values);
    }
    if (exp1.test(values) && exp2.test(values) && exp3.test(values)){
        return "YES";
    } else {
        return "NO";
    }

}
braces(2);
braces("{}[]()");
braces("{[}]}");
braces("{([[]])}");


let users = {
    pavel: [1,21,2],
    ivan: [1,21,2],
    costya: [1,21,2]
};

function photos(users) {
    for (var i in users) {
        var user = users[i];
    }
}
