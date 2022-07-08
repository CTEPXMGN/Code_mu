let slider = document.querySelector('#slider');
let imgs = slider.querySelectorAll('img');
let i = 0;

setInterval(function() {
    imgs[i].classList.remove('active');
    i++;
    if (i > 2) {
        i = 0;
    }
    imgs[i].classList.add('active');
}, 1000);
