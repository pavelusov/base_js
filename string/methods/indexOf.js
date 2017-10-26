var str = 'Методы стринг';

console.log(str.indexOf('Методы')); // 0
console.log(str.indexOf('методы')); // -1
console.log(str.indexOf('Методы', 5)); // -1
console.log(str.indexOf('стр')); // 7
console.log(str.indexOf('стр', 5)); // 7
console.log(str.indexOf('стр', 8)); // -1
console.log(str.indexOf('т', 0)); // 2

if (str.indexOf('Методы') !== -1) {
	console.log('Вхождение =>', str.indexOf('Методы') !== -1)
}
console.log(str.indexOf('т')); // 2
console.log(str.lastIndexOf('т')); // 8
