let num1 = 12;
let num2 = 18;

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
// Получаем минимальный делитель
function getMinDivisor(arr) {
    let minDivisor = Math.max.apply(null, getInt());
    return minDivisor;
}

console.log(getMinDivisor(getInt()));