let getData = (method, path) => {
    return new Promise((resolve, reject) => {
        console.log("After 1 second, the request will be sent");
        setTimeout(() => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, path, true);
            xhr.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200 ) {
                    return resolve(JSON.parse(this.responseText));
                }
                if (this.status !== 200) {
                    return reject(new Error("No data"));
                }
            };
            xhr.send();
        }, 1000);
    });
};

getData('GET', './data.json')
    .then((data) => {
        console.log(data);
    });

