var compose = (...func) => {
   func.reverse().forEach((f) => {
       f();
   })
};

compose(foo1, foo2, foo3);

function foo1() {
    console.log('foo 1');
}

function foo2() {
    console.log('foo 2');
}

function foo3() {
    console.log('foo 3');
}

var compose1 = (...func) =>
    (value) => func.reverse().reduce((v,fn) => fn(v), value);


