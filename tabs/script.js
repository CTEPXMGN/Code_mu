let tabs = document.querySelectorAll('.tab');
let buttons = document.querySelectorAll('a');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        event.preventDefault();
        for (let j = 0; j < buttons.length; j++) {
            if (buttons[j].classList.contains('active')) {
                buttons[j].classList.remove('active');
                tabs[j].classList.remove('active');
            }
        }
        buttons[i].classList.add('active');
        tabs[i].classList.add('active');
    })
}