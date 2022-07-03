let tabs = document.querySelectorAll('.tab');
let links = document.querySelectorAll('.link');

for (const link of links) {
    link.addEventListener('click', function() {
        for (const tab of tabs) {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            }
        }
        link.parentElement.classList.add('active');
    })
}
