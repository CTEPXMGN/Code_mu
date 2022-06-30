let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
        let li = document.createElement('li');
        // Создаём задачу
        let task = document.createElement('span');
        task.classList.add('task');
        task.innerHTML = this.value;
        // Навешиваем редактор задачи
        task.addEventListener('dblclick', function() {
            let inputNew = document.createElement('input');
            inputNew.value = task.innerHTML;
            inputNew.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    task.innerHTML = inputNew.value;
                }
            })
            task.innerHTML = '';
            task.append(inputNew);
        })
        li.appendChild(task);
        // Удаление задачи
        let remove = document.createElement('span');
        remove.classList.add('remove');
        remove.innerHTML = 'удалить';
        remove.addEventListener('click', function() {
            remove.parentElement.remove();
        })
        li.appendChild(remove);
        // Выделение выполненной задачи
        let mark = document.createElement('span');
        mark.classList.add('mark');
        mark.innerHTML = 'сделано';
        mark.addEventListener('click', function() {
            mark.parentElement.firstChild.classList.add('done');
        })
        li.appendChild(mark);

		list.appendChild(li);
        input.value = '';
	}
});