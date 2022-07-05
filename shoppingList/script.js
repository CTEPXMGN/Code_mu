// Таблица покупок
let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');
//  Создаём ячейку
function createCell(tr, value, name) {
	td = document.createElement('td');
	td.innerHTML = value;
	td.classList.add(name);
	tr.appendChild(td);
    return td;
}
// Пересчитываем "итого"
function recountTotal() {
	let costs = table.querySelectorAll('.cost');
	let sum = 0;
	if (costs) {
		for (const cost of costs) {
            sum += Number(cost.innerHTML);
        }
	}
    total.innerHTML = sum;
}
// Редактируем ячейки
function allowEdit(td) {
	td.addEventListener('dblclick', function() {
		let text = td.innerHTML
		td.innerHTML = '';
		
		let input = document.createElement('input');
		input.value = text;
		input.focus();
		td.appendChild(input);
		
		input.addEventListener('keydown', function(event) {
			if (event.key == 'Enter') {
				td.innerHTML = this.value;
				// Пересчитываем сумму
				if (td.classList.contains('price') || td.classList.contains('amount')) {
					let parent = td.parentElement;
                    let newPrice = parent.childNodes[1].innerHTML;
                    let newAmount = parent.childNodes[2].innerHTML;
                    parent.childNodes[3].innerHTML = newPrice * newAmount;
                    recountTotal();
				}
			}
		});
	});
}
// Добавляем строку с покупкой
add.addEventListener('click', function() {
	let tr = document.createElement('tr');
	
	allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
        this.parentElement.remove();
        recountTotal();
    });
	
	table.appendChild(tr);
    name.value = '';
    price.value = '';
    amount.value = '';
    recountTotal();
});