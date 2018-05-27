function process(count) {
    const LENGTH = 1000000 * count;
    for (var i = 0; i < LENGTH; i++) {
        var a = Math.ceil(LENGTH/count);
    }
}
setTimeout(function () {
    console.log("500");
}, 500);
console.time('t1');
process(1);
console.timeEnd('t1');
console.time('t2');
process(1);
console.timeEnd('t2');
console.time('t3');
process(3);
console.timeEnd('t3');
console.time('t4');
process(10);
console.timeEnd('t4');
