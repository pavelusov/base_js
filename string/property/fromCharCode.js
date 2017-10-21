// https://unicode-table.com/ru/
let author = String.fromCharCode(0x00A9),
	author2 = String.fromCharCode(169),
	equal = String.fromCharCode(61),
	right = `Все права защищенны ${author} 2017 год`,
	fraction = String.fromCharCode(0x00BD),
	hello = [1055, 1088, 1080, 1074, 1077, 1090, 451],
	str = '';

console.log(author, equal, author2);
console.log(right);
console.log(`${fraction} литра`);

let strArray = hello.map(str => {
	return String.fromCharCode(str);
});

str = strArray.join('');
console.log(str);

let ru = {
		start: 1040,
		end: 1103
	},
	ruDict = [];

for (; ru.start <= ru.end; ru.start++) {
	ruDict.push(String.fromCharCode(ru.start));
}

let regexp = new RegExp(`[${ruDict.join('')}]`, 'g');
console.log(regexp);

if (regexp.test('Павел Усов')) {
	console.log('Пользователь ввел русские буквы');
}

