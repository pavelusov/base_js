"use strict";
function level2() {
    var result = 1000;

    var level2 = 2;
    function level1() {
        var level1 = level2 - 1;
        function level0() {
            var level0 = level1 - 1;
            result = level0;
        }
        level0();
    }
    level1();

    return result;
}

var myLevel = level2();

