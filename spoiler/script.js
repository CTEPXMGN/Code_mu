let toggles = document.querySelectorAll('.toggle');

for (const toggle of toggles) {
    toggle.addEventListener('click', function(event) {
        let elem = toggle.parentElement.nextElementSibling;
        event.preventDefault();
        if (elem.classList.contains('active')) {
            elem.classList.remove('active');
        } else {
            elem.classList.add('active');
        }
        
    })
}