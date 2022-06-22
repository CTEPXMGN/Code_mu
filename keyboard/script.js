// Экранная клавиатура
let tds = document.querySelectorAll('.td');
let caps = document.querySelector('#caps');
let input = document.querySelector('#input');
let flag = true;

for (let td of tds) {
    td.addEventListener('click', function() {
        input.value += td.innerHTML;
    })
}

caps.addEventListener('click', function() {
    if (flag) {
        for (let td of tds) {
            td.innerHTML = td.innerHTML.toUpperCase();
        }
        flag = false;
    } else {
        for (let td of tds) {
            td.innerHTML = td.innerHTML.toLowerCase();
        }
        flag = true;
    }
})