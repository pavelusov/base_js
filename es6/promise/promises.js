const getFakeMembers = count => {
    return new Promise((resolve, reject) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => {
            (request.status === 200) ?
                resolve(request.response):
                reject(Error(request.statusText));
        };
        request.onerror = err => {
            reject(err);
        };
        request.send();

    });
};
getFakeMembers(5)
    .then(data => {
        let d = JSON.parse(data);
        let results = d.results;
        return results;
    })
    .then(results => {
        console.log(results);
    });
