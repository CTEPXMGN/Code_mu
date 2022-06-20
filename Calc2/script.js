let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let elem = document.querySelector('#elem');

// Коэффициенты квадратного уравнения
button1.addEventListener('click', function() {
    let a = +input1.value;
    let b = +input2.value;
    let c = +input3.value;

    let d = b ** 2 - 4 * a * c;
    
    if (d < 0) {
        elem.innerHTML = 'Корней нет.'
    } else if (d === 0) {
        let x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
        elem.innerHTML = `Корень: ${x1}.`;
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        
        elem.innerHTML = `Корень1: ${x1}. Корень2: ${x2}.`;
        
    }
});

// Тройка Пифагора
button2.addEventListener('click', function() {
    let arr = [];
    let a = input1.value ** 2;
    let b = input2.value ** 2;
    let c = input3.value ** 2;
    arr.push(a, b, c)
    arr.sort(function(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    })
    
    if (arr[2] === arr[1] + arr[0]) {
        console.log('Это тройка Пифагора');
    } else {
        console.log('Это не тройка Пифагора');
    }
})
