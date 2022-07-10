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
        td.addEventListener('click', function() {
            let col = this.classList.value;
            let i = colors.indexOf(col);
            this.classList.remove(colors[i]);
            i += 1;
            if (i == 3) {
                i = 0;
            }
            this.classList.add(colors[i]);
            let tds = document.querySelectorAll('td');
            j = 1;
            for (const td of tds) {
                if (this.classList.value == col) {
                    j++;
                    console.log(j);
                }
            }
            console.log(col);
        })
		tr.appendChild(td);
        
	}
	table.appendChild(tr);
}