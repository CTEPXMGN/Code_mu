// Гороскоп

let input = document.querySelector('#input');
let text = document.querySelector('#text');
let inputs = document.querySelectorAll('input');

let zodiacSign = [
    'Овен', 'Телец', 'Близнецы', 'Рак', 
    'Лев', 'Дева', 'Весы', 'Скорпион', 
    'Стрелец', 'Козерог', 'Водолей', 'Рыбы'
]
let horoscopes = [
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
    ['Гороскоп на вчера', 'Гороскоп на сегодня', 'Гороскоп на завтра'],
]

input.addEventListener('blur', function() {
    let birthDate = input.value.slice(5);
    // Проверяем выбранную радиокнопку
    let i = 1;
    for (const item of inputs) {
        if (item.checked) {
            i = item.value;
            console.log(i);
        }
    }
    // Проверяем знак зодиака по дате
    if (birthDate >= '03-21' && birthDate <= '04-20') {
        displayHoroscope(zodiacSign[0], horoscopes[0][i]);
    } else if (birthDate >= '04-21' && birthDate <= '05-21') {
        displayHoroscope(zodiacSign[1], horoscopes[1][i]);
    } else if (birthDate >= '05-22' && birthDate <= '06-21') {
        displayHoroscope(zodiacSign[2], horoscopes[2][i]);
    } else if (birthDate >= '06-22' && birthDate <= '07-23') {
        displayHoroscope(zodiacSign[3], horoscopes[3][i]);
    } else if (birthDate >= '07-24' && birthDate <= '08-23') {
        displayHoroscope(zodiacSign[4], horoscopes[4][i]);
    } else if (birthDate >= '08-24' && birthDate <= '09-23') {
        displayHoroscope(zodiacSign[5], horoscopes[5][i]);
    } else if (birthDate >= '09-24' && birthDate <= '10-23') {
        displayHoroscope(zodiacSign[6], horoscopes[6][i]);
    } else if (birthDate >= '10-24' && birthDate <= '11-22') {
        displayHoroscope(zodiacSign[7], horoscopes[7][i]);
    } else if (birthDate >= '11-23' && birthDate <= '12-21') {
        displayHoroscope(zodiacSign[8], horoscopes[8][i]);
    } else if (birthDate >= '12-22' && birthDate <= '12-31' || birthDate >= '01-01' && birthDate <= '01-20') {
        displayHoroscope(zodiacSign[9], horoscopes[9][i]);
    } else if (birthDate >= '01-21' && birthDate <= '02-19') {
        displayHoroscope(zodiacSign[10], horoscopes[10][i]);
    } else if (birthDate >= '02-20' && birthDate <= '03-20') {
        displayHoroscope(zodiacSign[11], horoscopes[11][i]);
    }
    
})
// Выводим результата
let displayHoroscope = function(sign, horoscope) {
    console.log(sign + ': ' + horoscope);
    text.innerHTML = sign + ': ' + horoscope; 
}