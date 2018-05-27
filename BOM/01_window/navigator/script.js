"use strict";
window.onload = function (ev) {
    var plugins = toArray(navigator.plugins);
    var elementPlugins = document.querySelector(".plugins");

    plugins.forEach(function (plugin) {
        var li = createElement('li', plugin.name);
        elementPlugins.appendChild(li);
    });

    function toArray(list) {
        var array = Array.prototype.slice.call(list);
        return array;
    }
    function createElement(tag, text) {
        var el = document.createElement(tag);
        el.innerText = text;
        return el;
    }
};
