let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');

for (const item of inputs) {
    item.addEventListener('click', function() {
        item.setAttribute('checked', 'true');
    })
}


button.addEventListener('click', function() {
    for (const item of inputs) {
        if (item.checked == true && item.dataset.right == '') {
            item.parentElement.classList.add('right');
        }
    }
})