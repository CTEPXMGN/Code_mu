let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let button = document.querySelector('#button');

// Нахождение делителей числа
button.addEventListener('click', function() {
    let num = input1.value;
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
})

// Нахождение общих делителей чисел
button.addEventListener('click', function() {
    let num1 = input1.value;
    let num2 = input2.value;
    let arr1 = [];
    let arr2 = [];
    let resultArr = [];

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            arr1.push(i);
        }
    }
    for (let i = 1; i <= num2; i++) {
        if (num2 % i === 0) {
            arr2.push(i);
        }
    }
    
    for (const item of arr1) {
        if (arr2.includes(item)) {
            resultArr.push(item);
        }
    }
    console.log(resultArr);

    // Наибольший общий делитель
    console.log(resultArr[resultArr.length - 1]);
})

// Наименьшее число, которое делится на данные числа
button.addEventListener('click', function() {
    let num1 = +input1.value;
    let num2 = +input2.value;
    let count;

    if (num1 > num2) {
        count = num1;
    } else {
        count = num2;
    }

    let i = count + 1;
    while (true) {
        if (i % num1 === 0  && i % num2 === 0) {
            console.log(i);
            break;
        }
        i++;
    }
})