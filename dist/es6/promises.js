'use strict';

var getFakeMembers = function getFakeMembers(count) {
    return new Promise(function (resolve, reject) {
        var api = 'https://api.randomuser.me/?nat=US&results=' + count;
        var request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = function (e) {
            console.log(e);
        };
    });
};
getFakeMembers(5);
//# sourceMappingURL=promises.js.map