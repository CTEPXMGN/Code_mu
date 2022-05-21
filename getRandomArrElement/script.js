let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Получаем случайное число из диапазона
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получаем случайное число из массива
function random(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

// Получаем сумму трёх случайных элементов
function sumOfElements() {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        sum += random(arr);
    }
    
    return sum;
}

console.log('Сумма случайных элементов массива: ' + sumOfElements(random(arr)));