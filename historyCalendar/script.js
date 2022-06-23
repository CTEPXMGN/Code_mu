// Поиск исторических событий

let input = document.querySelector('#input');
let table = document.querySelector('#table');

let events = [
    [
        [2000],
        ['20.01.2000', 'событие 1', 'описание события 1'],
        ['21.01.2000', 'событие 2', 'описание события 2'],
    ],
    [
        [2001],
        ['10.02.2001', 'событие 3', 'описание события 3'],
        ['11.02.2001', 'событие 4', 'описание события 4'],
        ['12.02.2001', 'событие 5', 'описание события 5'],
    ],
    [
        [2002],
        ['01.03.2002', 'событие 6', 'описание события 6'],
        ['02.04.2002', 'событие 7', 'описание события 7'],
        ['03.05.2002', 'событие 8', 'описание события 8'],
        ['04.06.2002', 'событие 9', 'описание события 9'],
    ]
]

input.addEventListener('change', function() {
    let table = document.querySelector('#table');
    table.innerHTML = '';
    for (const item of events) {
        
        for (let i = 1; i < item.length; i++) {
            if (item[0] == input.value) {
                
                let tr = document.createElement('tr');
                for (let j = 0; j < 3; j++) {
                    let td = document.createElement('td');
                    td.innerHTML = item[i][j];
                    tr.appendChild(td);
                }
                table.appendChild(tr);                
            }
        }
    }
})