let firstNum = 100;
let lastNum = 2000;

function getFriendly(firstNum, lastNum) {
  let num1 = 0;
  let num2 = 0;
  let arrFriendly =[];
  for (let i = firstNum; i < lastNum; i++) {
    num1 = i;
    for (let j = i; j < lastNum; j++) {
      let arr = [];
      num2 = j;
      if (isFreindly(num1, num2)) {
        arr.push(num1, num2);
        arrFriendly.push(arr);
      }
    }
    
  }
  return arrFriendly;
}

function isFreindly(num1, num2) {
  let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));

  return sum1 == num2 && sum2 == num1;
}

function getOwnDivisors(num) {
  let arrOfDivisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arrOfDivisors.push(i);
    }
  }

  return arrOfDivisors;
}

function getSum(num) {
	let sum = 0

  for (let elem of num) {
    sum += +elem;
  }

  return sum;
}

console.log(getFriendly(firstNum, lastNum));