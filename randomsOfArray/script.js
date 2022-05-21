let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;

// Отрезаем от перемешанного массива нужную часть
function first(arr, length) {
    return arr.slice(0, length);
}
// Получаем перемешанный массив
function shuffle(arr) {
	let result = [];
	
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	console.log(result);
	return result;
}
// Получаем рандомный индекс 
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Привызове функции 1-й параметр - перемешанный массив
console.log(first(shuffle(arr), num));