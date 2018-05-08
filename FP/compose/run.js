function run(...func) {
    let output = func.reverse().reduce((value, foo) => {
        return foo(value());
    });
    return output;
}

function square(num) {
    return function () {
        return num * num;
    };
}

function getNumber(num) {
    return function () {
        return num;
    };
}

run(console.log, square, getNumber(5));
