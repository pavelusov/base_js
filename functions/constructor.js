var go = new Function("a", "b", "a *= 10; return a + b;");

console.log(go(2,3));


var getNumber = new Function("a"); // если аргумент 1, должно быть body

console.log(getNumber());
