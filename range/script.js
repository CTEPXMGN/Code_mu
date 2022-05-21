let firstNum = 3;
let lastNum = 11;

// подучаем массив из диапазона чисел
function range(num1, num2) {
    let result = [];

    for (let i = num1; i <= num2; i++) {
        result.push(i);
    }

    return result;
}

console.log(range(firstNum, lastNum));