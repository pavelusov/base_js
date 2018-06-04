'use strict';

var getFakeMembers = function getFakeMembers(count) {
    return new Promise(function (resolve, reject) {
        var api = 'https://api.randomuser.me/?nat=US&results=' + count;
        var request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = function () {
            request.status === 200 ? resolve(request.response) : reject(Error(request.statusText));
        };
        request.onerror = function (err) {
            reject(err);
        };
        request.send();
    });
};
getFakeMembers(5).then(function (data) {
    var d = JSON.parse(data);
    var results = d.results;
    return results;
}).then(function (results) {
    console.log(results);
});
//# sourceMappingURL=promises.js.map