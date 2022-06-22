let text = document.querySelector('#text');
let check1 = document.querySelector('#check1');
let check2 = document.querySelector('#check2');
let check3 = document.querySelector('#check3');
let check4 = document.querySelector('#check4');

// Количество слов в тексте
text.addEventListener('blur', function() {
    if (check1.checked) {
        let frase = text.value;
        let textArr = frase.split(' ');
        console.log('Слов в тексте: ' + textArr.length);
    }
})
// Количество символов в тексте
text.addEventListener('blur', function() {
    if (check2.checked) {
        let frase = text.value;
        console.log('Символов в тексте: ' + frase.length);
    }
})
// Количество символов в тексте (без пробелов)
text.addEventListener('blur', function() {
    if (check3.checked) {
        let frase = text.value;
        let textArr = frase.split(' ');    
        let count2 = 0;
        for (const item of textArr) {
            count2 += item.length;
        }
        console.log('Символов в тексте (без пробелов): ' + count2);
    }
})
// Процентное содержание каждого символа в тексте
text.addEventListener('blur', function() {
    if (check4.checked) {
        let frase = text.value;
    
        let result = {};
        for (let str of frase) {
            result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
        }
        let resultNew = {};
        for (let key in result) {
            resultNew[key] = Math.round(result[key] * 100 / frase.length) + '%'; 
        }
        console.log(resultNew);
    }
})