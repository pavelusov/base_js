"use strict";
function wordList() {
    return Array.prototype.slice.call(arguments);
}

let list1 = wordList("Pavel", "Hello");

let wordListWithDear = wordList.bind(undefined, "Dear");

let list2 = wordListWithDear("Pavel", "Hello");
