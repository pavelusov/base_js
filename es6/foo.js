const makeCounter = count => () => count++;


let counter1 = makeCounter(1);
counter1();
counter1();
counter1();


let createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
};

const createScream2 = logger => message =>
    logger(`${message.toUpperCase()} !!!`);
