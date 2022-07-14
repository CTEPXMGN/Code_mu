let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();
// Создаём массив
function range(count) {
	let arrayOfDays = [];
	for (let i = 1; i <= count; i++) {
		arrayOfDays.push(i);
	}
	return arrayOfDays;
}
// Получаем последний день месяца
function getLastDay(year, month) {
	return new Date(year, month + 1, 0).getDate();
}
// Получаем номер дня недели первого числа
function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}
// Получаем номер дня недели последнего числа
function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}
// Добавляем пустые строки в массив
function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr.unshift('');
	}
	for (let i = 0; i < right; i++) {
		arr.push('');
	}
	return arr;
}
// Получаем двухмерный массив
function chunk(arr, n) {
	let result = [];
	let count = arr.length / n;
	
	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}
	
	return result;
}

function createTable(parent, arr) {
	for (const item of arr) {
		let tr = document.createElement('tr');

		for (const subItem of item) {
			let td = document.createElement('td');
			td.innerHTML = subItem;
			tr.appendChild(td);
		}
		parent.appendChild(tr);
	}
}

function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums);
}

draw(body, year, month);