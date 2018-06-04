'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// Оператор распространения ...
//позволяет объединять содержимое массивов

var rgb = ['red', 'blue', 'green'];
var bw = ['black', 'white'];
var colors = [].concat(rgb, bw);

var _reverse = [].concat(rgb).reverse(),
    _reverse2 = _slicedToArray(_reverse, 1),
    green = _reverse2[0]; // не меняем исходный массив, ... используем для копирования массива

var directions = function directions() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var start = args[0],
        remaining = args.slice(1);

    var _remaining$reverse = remaining.reverse(),
        _remaining$reverse2 = _toArray(_remaining$reverse),
        finish = _remaining$reverse2[0],
        stops = _remaining$reverse2.slice(1);

    console.log(start);
    console.log(finish);
    console.log(remaining);
    console.log(stops);
};

directions(1, 2, 3, 4, 5);
//# sourceMappingURL=spread-operator.js.map