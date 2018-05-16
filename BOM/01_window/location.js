var TIME_TO_TRANSFER = 2;

// window.location
var hash = location.hash;
var host = location.host;
var hostname = location.hostname;
var href = location.href;
var pathname = location.pathname;
var port = location.port;
var protocol = location.protocol;
var search = location.search;

var newLocation = "new-location.html";
var count = TIME_TO_TRANSFER;

var timer = document.querySelector(".timer");
timer.innerText = TIME_TO_TRANSFER.toString();
var transfer = setInterval(function () {
    count--;
    timer.innerText = count.toString();
    if (count === 0) {
        clearInterval(transfer);
        location.href = newLocation;
    }
}, 1000);
