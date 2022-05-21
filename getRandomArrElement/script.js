let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Получаем случайное число из диапазона
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получаем случайное число из массива
function random(arr) {
    let key = getRandomInt(0, arr.length - 1);
    console.log(arr[key]);
}

random(arr)