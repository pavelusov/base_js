'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var colorRed = {
    color: '#ff0000',
    name: 'red',
    rating: 0
};
var rateColor = function rateColor(color, rating) {
    return _extends({}, color, {
        rating: rating
    });
};

var colorRed1 = rateColor(colorRed, 3);
console.log(colorRed1);

var list = [{ title: 'red' }, { title: 'green' }];

var addColor = function addColor(title, colors) {
    return [{ title: title }].concat(_toConsumableArray(colors));
};

var myList1 = addColor('blue', list);

console.log(myList1);
//# sourceMappingURL=01_Immutability.js.map