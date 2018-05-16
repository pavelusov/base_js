// "use strict";

// 01 delete window.prop

var prop = "Non delete window.prop with delete";
var valueDeleteOperation = delete window.prop;

if (valueDeleteOperation) {
    console.log("Deleted");
} else {
    console.log(" Don't deleted prop", valueDeleteOperation);
}

// 02 Frames
(function () {
    window.onload = function (ev) {
        console.log("Document onload");
        // 1) из главной страницы мы постучались в iframe
        // 2) в iframe получили объект window
        // 3) и ПОМЕНЯЛИ стили!
        var frame = window.frames["aFrame"]; // 1)

        var a = frame.window; // 2)

        var elementFrameA = a.document.getElementById('titleFrame');
        elementFrameA.classList.add("backgroundBlue"); // 3)
        elementFrameA.style.color = "white";

        // хотя многие ресурсы пишут что это невозможно)
    }
})();


