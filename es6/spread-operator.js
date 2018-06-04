// Оператор распространения ...
//позволяет объединять содержимое массивов

let rgb = ['red', 'blue', 'green'];
let bw = ['black', 'white'];
let colors = [...rgb, ...bw];

let [green] = [...rgb].reverse(); // не меняем исходный массив, ... используем для копирования массива

let directions = (...args) => {
    let [start, ...remaining] = args;

    let [finish, ...stops] = remaining.reverse();
    console.log(start);
    console.log(finish);
    console.log(remaining);
    console.log(stops);
};

directions(1,2,3,4,5);

let morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};
let dinner = "mac and cheese";
let backpackingMeals = {
    ...morning,
    dinner
};
