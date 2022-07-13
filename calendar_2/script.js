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
	let lastDays = [31, 28, 31, 30, 31, 30, 31, 
		31, 30, 31, 30, 31]; 
	
	if (month != 1) {
		return lastDays[month];
	} else {
		return new Date(year, month + 1, 0);
	}
}