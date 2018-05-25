"use strict";

let now = new Date();

let birthday = new Date("7/23/1983"); // month/day/year
let birthdayJSON = birthday.toJSON();
let birthdayUTCstring = birthday.toUTCString();

let birthdayParse = Date.parse("1983-07-23T23:50:00"); // 427830600000
let birthday2 = new Date(birthdayParse); // Sat Jul 23 1983 23:50:00 GMT+0600 (+06) {}

// 23 июля 1983 23:50 по гринвичу
let birthdayUTC = Date.UTC(1983, 6, 23, 23, 50, 0);
// 24 июля 1983 5:50 - преобразуется с учетом региона +6
let birthday3 = new Date(birthdayUTC);

// 23 июля 1983 23:50 +6 по локальному часовому поясу
let birthday4 = new Date(1983, 6, 23, 23, 50, 0);


