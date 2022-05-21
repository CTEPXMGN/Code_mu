let firstNum = 14;
let lastNum = 25;

// подучаем массив из диапазона чисел
function range(num1, num2) {
    let result = [];

    for (let i = num1; i <= num2; i++) {
        result.push(i);
    }

    return result;
}

// Получаем случайное число из диапазона
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Собираем массив из случайных элементов предыдущего массива
function shuffle(arr) {
    let result = [];

    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        result.push(elem);
    }

    return result;
}

console.log(shuffle(range(firstNum, lastNum)));