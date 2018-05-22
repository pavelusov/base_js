"use strict";

function room() {
    function myCassete() {
        var name = "Sony";
        var time = 30;

        var lenta = ["la-la-la 1 song", "la-la-la 2 song"];

        return function getLenta() {
            return lenta;
        };
    }
    function magnitofon(cassette) {
        var lenta = cassette(); // загрузили кассету
        var songs = lenta();

        console.info("Song: " + songs[0]);

    }

    magnitofon(myCassete);
}
room();
