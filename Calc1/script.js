let param1 = 5;
let param2 = 7;
let param3 = 10;
let radius = 30;

// площадь квадрата
function calcSquare(num) {
    return num * num;
}
// периметр квадрата
function calcPerimetr(num) {
    return num * 4;
}
console.log(calcSquare(param1));
console.log(calcPerimetr(param1));
// площадь прямоугольника
function rectangleSquare(num1, num2) {
    return num1 * num2;
}
// периметр прямоугольника
function rectanglePerimeter(num1, num2) {
    return num1 * 2 + num2 * 2;
}

console.log(rectangleSquare(param1, param2));
console.log(rectanglePerimeter(param1, param2));
// площадь круга
function circleArea(radius) {
    return 3.14 * (radius ** 2);
}
// длина окружности
function circle(radius) {
    return 2 * 3.14 * radius;
}

console.log(circleArea(radius));
console.log(circle(radius));

function rectangleArea(num1, num2, num3) {
    let p = (num1 + num2 + num3) / 2;
    return Math.sqrt(p * (p - num1) * (p - num2) * (p - num3));
}

console.log(Math.round(rectangleArea(param1, param2, param3)));