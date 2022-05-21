let num1 = 8;
let num2 = 11;

// Проверяем наличие елемента в массиве
function inArray(num, arr) {
    return arr.indexOf(num) !== -1;
}

// Получаем массив делителей 
function getDivisors(num) {
    let arrOfDivisiors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arrOfDivisiors.push(i);
        }
    }
    return arrOfDivisiors;
}

// Получаем пересечение массивов
function getInt() {
    let result = [];

    let arr1 = getDivisors(num1);
    let arr2 = getDivisors(num2);
    
    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    return result;
}

// Проверяем взаимно простые числа или нет
function isSimpleNumbers(arr) {
    if (arr.length === 1 && arr[0] === 1) {
        console.log('Числа являются взаимно простыми');
    } else {
        console.log('Числа НЕ являются взаимно простыми');
    }
}

isSimpleNumbers(getInt());