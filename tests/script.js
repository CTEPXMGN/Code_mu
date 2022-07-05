let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];

for (const item in questions) {
    let div = document.createElement('div');

    let p = document.createElement('p');
    p.innerHTML = item;
    let input = document.createElement('input');
    div.appendChild(p);
    div.appendChild(input);
}

let inputs = document.querySelectorAll('input');
let check = document.querySelector('button');

check.addEventListener('click', function() {
    let arr = [];
    for (const item of questions) {
        for (const key in item) {
            if (key === 'right') {
                arr.push(item[key])
            }
        }
    }
    
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == arr[i]) {
            inputs[i].classList.add('right');
        } else {
            inputs[i].classList.add('wrong');
        }
    }
})