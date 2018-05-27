"use strict";
(function () {
    let obj = {
        a: {
            b: {
                c: {
                    d: "end"
                }
            }
        }
    };

    function search(inputObject, path) {
        let arrayPath = path.split(',');
        let key = arrayPath.shift();

        if (arrayPath.length === 0) {
            return;
        }

        let outputObject = inputObject[key];


        return search(outputObject, arrayPath.join(','));
    }

    let result = search(obj, 'a,b,c');
})();
