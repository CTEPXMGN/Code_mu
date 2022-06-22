let input = document.querySelector('#tagname');
let description = document.querySelector('#description');

let tags = {
    h1: 'заголовок 1-го уровня',
    p: 'параграф',
    a: 'ссылка',
    br: 'перенос строки',
    body: 'основное содержание'
}

input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        for (const key in tags) {
            if (key == input.value) {
                description.innerHTML = tags[key];
            }
        }
    }
})