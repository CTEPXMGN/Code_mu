let calendar = document.querySelector('#calendar');
let days = document.querySelector('#days');
let mounthName = document.querySelector('h1');
let buttonBack = document.querySelector('#back');
let buttonForward = document.querySelector('#forward');

let months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сенябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let now = new Date();

let mounth = now.getMonth();
let year = now.getFullYear();
let date = now.getDate();

mounthName.innerHTML = ` ${months[mounth]}  ${year}`;

for (let i = 1; i <= lastDays[mounth]; i++) {
	let li = document.createElement('li');
	li.innerHTML = i;
    if (li.innerHTML == date) {
        li.style.backgroundColor = 'wheat';
    }
	calendar.appendChild(li);
}

buttonBack.addEventListener('click', function() {
    calendar.innerHTML = '';
    mounth--;
    if (mounth < 0) {
        mounth = 11;
        year--;
    }
    
    mounthName.innerHTML = ` ${months[mounth]}  ${year}`;

    for (let i = 1; i <= lastDays[mounth]; i++) {
        let li = document.createElement('li');
        li.innerHTML = i;
        
        calendar.appendChild(li);
    }
});

buttonForward.addEventListener('click', function() {
    calendar.innerHTML = '';
    mounth++;
    if (mounth > 11) {
        mounth = 0;
        year++;
    }
    
    mounthName.innerHTML = ` ${months[mounth]}  ${year}`;

    for (let i = 1; i <= lastDays[mounth]; i++) {
        let li = document.createElement('li');
        li.innerHTML = i;
        
        calendar.appendChild(li);
    }
})