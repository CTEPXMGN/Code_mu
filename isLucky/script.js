// Проверяем верность для всех чисел из диапазона
function getLuckyTickets() {
    let result = [];

    for (let i = 1001; i < 999999; i++) {
        if (isLucky(i)) {
            result.push(i);
        };
    };
    return result;
};

// Добавляем нули в начало числа
function normalizeNum(num) {
    let str = String(num);

    if (str.length === 4) {
        str = '00' + str;
    }
    if (str.length === 5) {
        str = '0' + str;
    }
    
    return str;
};
// Проверяем равенство правой и левой частей
function isLucky(num) {
    let str = normalizeNum(num);

    let str1 = +str[0] + +str[1] + +str[2];
    let str2 = +str[3] + +str[4] + +str[5];
    
    return str1 === str2;
};

console.log(getLuckyTickets());