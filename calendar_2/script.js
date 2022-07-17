let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let info = document.querySelector('.info');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');
let months = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'];


let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();
info.textContent = months[month] + ' ' + year;
draw(body, year, month);

// Рисуем календарь
function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums);
}
// Создаём таблицу
function createTable(parent, arr) {
	parent.innerHTML = '';
	let cells = [];
	
	for (let sub of arr) {
		let tr = document.createElement('tr');
		
		for (let num of sub) {
			let td = document.createElement('td');
			td.innerHTML = num;
			tr.appendChild(td);
			cells.push(td);
		}
		parent.appendChild(tr);
	}
	return cells;
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
// Получаем последний день месяца
function getLastDay(year, month) {
	return new Date(year, month + 1, 0).getDate();
}
// Создаём массив
function range(count) {
	let arrayOfDays = [];
	for (let i = 1; i <= count; i++) {
		arrayOfDays.push(i);
	}
	return arrayOfDays;
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
// Получаем следующий месяц
function getNextMonth(month) {
	month += 1;
	info.textContent = months[month] + ' ' + year;
	if (month == 12) {
		month = 0;
	}
	return month;
}
// Получаем следующий год
function getNextYear(year, month) {
	if (month == 11) {
		return year + 1;
	}
	return year;
}
// Получаем предыдущий месяц
function getPrevMonth(month) {
	month -= 1;
	info.textContent = months[month] + ' ' + year;
	if (month == -1) {
		month = 11;
	}
	return month;
}
// Получаем предыдущий год
function getPrevYear(year, month) {
	if (month == 11) {
		return year - 1;
	}
	return year;
}

next.addEventListener('click', function() {
	body.innerHTML = '';
	draw(body, getNextYear(year, month), getNextMonth(month));
});
prev.addEventListener('click', function() {
	draw(body, getPrevYear(year, month), getPrevMonth(month));
});