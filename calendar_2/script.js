<<<<<<< HEAD
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();
// month = 6;
// let count = 15;

function range(count) {
	let arrayOfDays = [];
	for (let i = 1; i <= count; i++) {
		arrayOfDays.push(i);
	}
	return arrayOfDays;
}

function getLastDay(year, month) {
	return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

let arr = range(getLastDay(year, month));
let firstWeekDay = getFirstWeekDay(year, month);
let lastWeekDay  = getLastWeekDay(year, month);

function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr.unshift('');
	}
	for (let i = 0; i < right; i++) {
		arr.push('');
	}
	return arr;
}

function chunk(arr, n) {
	let result = [];
	let count = arr.length / n;
	
	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}
	
	return result;
}

let res = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7); 
console.log(res);

console.log(firstWeekDay);
console.log(lastWeekDay);
=======
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();

let count = 15;

function range(count) {
	let arrayOfDays = [];
	for (let i = 1; i <= count; i++) {
		arrayOfDays.push(i);
	}
	return arrayOfDays;
}

function getLastDay(year, month) {
	return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekDay(year, month) {
	return new Date(year, month, 1).getDay();
}

function getLastWeekDay(year, month) {
	return new Date(year, month, getLastDay(year, month)).getDay();
}

console.log(getFirstWeekDay(year, month));
console.log(getLastWeekDay(year, month));
>>>>>>> ecb9cd0ad91f7c1429863ca3d839a833eb4674c4
