let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let table = document.querySelector('#field');

let randomColor = function(colors) {
    let randomNum = Math.round(Math.random() * 2);
    return colors[randomNum];
}

for (let i = 0; i < rows; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < cols; i++) {
		let td = document.createElement('td');
        let color = randomColor(colors);
        td.classList.add(color);
        td.addEventListener('click', function(colors, color) {
            if (this.classList.contains('green')) {
                this.classList.remove('green');
                this.classList.add('blue');''
            }
        })
		tr.appendChild(td);
	}
	table.appendChild(tr);
}