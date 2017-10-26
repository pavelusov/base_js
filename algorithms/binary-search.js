var myList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function binarySearch(list, item) {
	var low = 0; // low index array
	var high = list.length - 1; // high index array
	var iteration = 1;
	while (low <= high){
		console.log('****ITERATION = ' , iteration++, '***');
		console.log('low =',low, ', high =', high);

		// Divided the elements list length in half
		var mid = Math.floor((low + high) / 2);
		var guess = list[mid]; // value middle element in array

		console.log('0: mid =>', mid);

		if (guess === item) {
			return mid;
		}

		if (guess > item) {
			console.log('value: ', guess, '>', item);
			high = mid - 1;
			console.log('1: high => ', high);
		} else {
			console.log('value: ', guess, '<', item);
			low = mid + 1;
			console.log('1: low => ', low);
		}
	}
	return null;
}

var result = binarySearch(myList, 30);

console.log('index element in array', result);
console.log('value element ', myList[result]);