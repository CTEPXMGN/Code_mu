// Ищем совпадения элементов в массивах
function getInt(...arrs) {
    let result = [];

    let arr0 = arrs.shift(); // Берём нулевой массив, шифтим его в arr0

    for (let elem of arr0) { // Есть ли каждый элемент нулевого массива в других массивах
        if (inArrays(elem, arrs)) {
            result.push(elem); // Если есть, пушим в result
        }
    }
    return result;
}
// 
function inArrays(elem, arrs){ // Берём елемент и оставшиеся массивы
	for (let arr of arrs) {  // Для каждого массива из оставшихся массивов
        if (inArray(elem, arr)) { // проверяем есть ли элемент в нём
            return true; 
        }
    }
    return false;
}

function inArray(elem, arr) { // Проверяем, есть ли элемент в конкретном массиве
    return arr.indexOf(elem) !== -1;
}
// Вызываем функцию 
let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]); 
console.log(result);