// window.setTimeout
(function () {
    window.onload = function (ev) {
        var items = document.querySelector(".items");

        addElement(items, "red", 1000);   //  3 step: send to task queue after 1000 ms
        addElement(items, "yellow", 600); //  2 step: send to task queue after 600 ms
        addElement(items, "green", 300); //   1 step:  send to task queue after 300 ms

        // 4 step: Stack free
        // 5 step: run addElement(items, "green", 300);
        // 6 step: run addElement(items, "yellow", 600);
        // 7 step: run addElement(items, "red", 1000);

        function addElement(parent, color, time) {
            var div = document.createElement("div");
            div.classList.add("item");
            div.style.background = color;
            setTimeout(function () {
                parent.appendChild(div);
            }, time);
        }
    }
})();
