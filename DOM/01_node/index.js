"use strict";
window.onload = function () {
    var listCollection = document.getElementsByClassName("list");
    console.log(listCollection instanceof HTMLCollection, 'HTMLCollection');

    var list = document.querySelector(".list");
    console.log(list instanceof Node, 'Node');
    console.log(list.nodeType);
    console.log(list.nodeName);

    var items = list.querySelectorAll(".item");
    console.log(items instanceof NodeList, 'NodeList');
    console.log(items, 'items');
    console.log(items.ownerDocument, 'items');

    var items2 = list.childNodes;
    console.log(items2, 'items2', 'childNodes');

    var body = document.querySelector('body');
    console.log(body.__proto__)


    var lists = document.querySelectorAll(".list");
    var button = document.querySelector(".btnTransfer");

    button.onclick = function () {
      transfer();
    };
    function transfer() {
        var node = lists[0].querySelectorAll(".item")[0];
        var list2 = lists[1];
        if (typeof node !== 'undefined') {
            list2.appendChild(node);
            return;
        }

    }
    var core = document.implementation.hasFeature("Core", "3.0");

};
