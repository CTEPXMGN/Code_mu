// Угадать 10 ячеек, кагаданных ПК
let table = document.querySelector('#table');
let elem = document.querySelector('#elem');
let count = 1;
let count2 = 0;
let arrNumbers = [];
// Получаем 10 рандомных чисел
for (let i = 0; i < 10; i++) {
    let randomNum = Math.round(Math.random() * 100);
    arrNumbers[i] = randomNum;
}
console.log(arrNumbers);
// Запускаем таймер
let timerId = setInterval(function() {
	elem.innerHTML = elem.innerHTML - 1;
    if (count2 == 10) {
        clearInterval(timerId);
        elem.innerHTML = 'You are winner!!!';
    }
    if (elem.innerHTML <= 0) {
        clearInterval(timerId);
        elem.innerHTML = 'You are looser)))';
    }
}, 1000);
// Рисуемм таблицу
for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 10; i++) {
		let td = document.createElement('td');
        td.innerHTML = count;
        td.value = count;
        count++;
        td.addEventListener('click', funk);
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}
// Функция оработки клика
function funk() {
    for (const item of arrNumbers) {
        if (item == this.value) {
            count2++;
            this.style.backgroundColor = 'green';
        }
    }
    
}