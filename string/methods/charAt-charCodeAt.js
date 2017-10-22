// user input only russian word or name
let rusInput = 'Алекcей'; // letter 'c' - en, other - ru

// ru letters range 1040 - 1103
let letterA = 'А'.charCodeAt(0);
let letterYA = 'я'.charCodeAt(0);
console.log(letterA, letterYA); // 1040 1103

let searchEngLetters = (word) => {
	let len = word.length,
		i = 0,
		enLetters = [];

	for (; len > i; i++) {
		if (word.charCodeAt(i) < 1040 || word.charCodeAt(i) > 1103) {
			enLetters.push(word.charAt(i));
		}
	}

	if (enLetters.length) {
		console.log('*********');
		console.log('Все буквы должны быть русские!');
		if (enLetters.length == 1){
			console.log(`Вы написали англ.букву: "${enLetters.toString()}"`);
		} else {
			console.log(`Вы написали англ.буквы: "${enLetters.join(',')}"`);
		}
	} else {
		console.log('*********');
		console.log('Все буквы русские!')
	}
};

searchEngLetters(rusInput);
searchEngLetters('Браvo');
searchEngLetters('Привет');
searchEngLetters('join');
