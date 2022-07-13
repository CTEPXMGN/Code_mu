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