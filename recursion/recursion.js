"use strict";
(function () {

    function add(n, acc) {
        if (n === 0) return acc;
        return add(n - 1, acc + n);
    }

    function addTail(n, acc) {
        if (n === 0) return acc;
        let queue = [];

        addQueue(queue, add);

        function addQueue(q, a) {

        }

        function add() {
            n--;
            acc += n;
        }
    }

    let res = addTail(5, 1);
    console.log(res);


    var inputObj = {
        a: {
            b: {
                c: {
                    d: "end"
                }
            }
        }
    };

    let outObj = tailSearch(inputObj, 'a,b,c');


    function search(inObj, inPattern) {
        let listPatterns = inPattern.split(',');

        let pattern = listPatterns.splice(0, 1)[0];

        let outObject = inObj[pattern];

        if (listPatterns.length === 0) {
            return outObject;
        }

        let outPattern = listPatterns.join(',');

        return search(outObject, outPattern);
    }
})();
