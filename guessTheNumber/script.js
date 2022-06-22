// Угадай число, загаданное компьютером

let input = document.querySelector('#input');
let text = document.querySelector('#text');

let randomNum = Math.round(Math.random() * 100);

input.addEventListener('blur', function() {
    if (randomNum > input.value) {
       text.innerHTML = 'Введите число побольше.';
    } else if  (randomNum < input.value) {
        text.innerHTML = 'Введите число поменьше.';
    } else {
        text.innerHTML = 'Bingo!!!';
    }
})