let firstNum = 1;
let lastNum = 1000;

// Находим совершенные числа
function getPerfect(num1, num2) {
  let arr = [];
  for (let i = num1; i < num2; i++) {
    let sum = getSum(getOwnDivisors(i));

    if (sum === i) {
      arr.push(i);
    }
  }
  return arr;
}

// Находим делители числа
function getOwnDivisors(num) {
  let arrOfDivisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arrOfDivisors.push(i);
    }
  }

  return arrOfDivisors;
}

// Находим сумму делителей числа
function getSum(num) {
	let sum = 0

  for (let elem of num) {
    sum += +elem;
  }

  return sum;
}

console.log(getPerfect(firstNum, lastNum));