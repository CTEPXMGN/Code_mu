let inputs = document.querySelectorAll('input');
let inputs1 = document.querySelectorAll('input[name="1"]');
let inputs2 = document.querySelectorAll('input[name="2"]');
let inputs3 = document.querySelectorAll('input[name="3"]');
let button = document.querySelector('button');
let answers = [0, 1, 2];

for (const item of inputs) {
    item.addEventListener('click', function() {
        item.setAttribute('checked', 'true');
    })
}


button.addEventListener('click', function() {
    for (let i = 0; i < inputs1.length; i++) {
        if (inputs1[i].checked == true && answers[0] == i) {
            inputs1[i].parentElement.classList.add('right');
        }
    }
    for (let i = 0; i < inputs2.length; i++) {
        if (inputs2[i].checked == true && answers[1] == i) {
            inputs2[i].parentElement.classList.add('right');
        }
    }
    for (let i = 0; i < inputs3.length; i++) {
        if (inputs3[i].checked == true && answers[2] == i) {
            inputs3[i].parentElement.classList.add('right');
        }
    }
})
