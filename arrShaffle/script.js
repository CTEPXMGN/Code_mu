let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

console.log(shuffle(arr));