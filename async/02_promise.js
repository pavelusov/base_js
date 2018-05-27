(function () {
    window.onload = function () {

        let buttons =  document.getElementById("buttons");
        let output = document.querySelector(".output");

        buttons.addEventListener('click', function (event) {
            let id = event.target.getAttribute('data-id'); // support more browser
            LoadFile('./data_' + id + '.json')
                .then((xhr) => {
                    let response = JSON.parse(xhr.response);
                    return response;
                })
                .then((response) => {
                    let template = `${response[0].name} и ${response[1].name}`;
                    return template;
                })
                .then((template) => {
                    let div = document.createElement('div');
                    div.innerText = template;
                    output.appendChild(div);
                })
                .catch((xhr) => {
                    // console.log(xhr.statusText);
                });
        });

    };

    function LoadFile(url) {
        let promise = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status === 200)  {
                        resolve(xhr);
                    }
                    if (this.status === 404) {
                        reject(xhr);
                    }
                }
            };
            xhr.send();
        });
        return promise;
    }
})();
