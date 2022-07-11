let field = document.querySelector('#field');
let size = 2;

start(size);
// старт игры
function start(size) {
	activate(build(field, prepare(size)), size);
}

// создаём массив
function range(count) {
	let arr1 = [];
    for (let i = 0; i < count; i++) {
        arr1[i] = i + 1;
    }
    return arr1;
}
// перемешиваем массив
function shuffle(arr) {
	return arr.sort(() => Math.random() - 0.5);
}
// разбиваем на двухмерный массив
function chunk(arr, n) {
    let arr1 = [];
    let k = 0;
    for (let i = 0; i < n; i++) {
        arr1[i] = []; // создаем подмассив
        for (let j = 0; j < n; j++) {
            arr1[i].push(arr[k]); // заполняем подмассив 
            k++;
        }
    }
    return arr1;
}
// подготавливаем двухмерный массив
function prepare(size) {
	let arr = [];
	arr = range(size * size);
	arr = shuffle(arr);
	arr = chunk(arr, size);
	return arr;
}
// создаём таблицу
function build(field, arr) {
	field.innerHTML = '';
	let cells = [];
	
	for (let sub of arr) {
		let tr = document.createElement('tr');
		
		for (let num of sub) {
			let td = document.createElement('td');
			td.innerHTML = num;
			tr.appendChild(td);
			
			cells.push(td);
		}
		
		field.appendChild(tr);
	}
	
	return cells;
}
// активируем ячейки
function activate(cells, size) {
    let counter = 1;
	for (let cell of cells) {
		cell.addEventListener('click', function() {
            if (this.textContent == counter) {
                this.classList.add('active');

                if (counter >= size * size) {
                    start(++size);
                }
                counter++;
            }
		});
	}
}