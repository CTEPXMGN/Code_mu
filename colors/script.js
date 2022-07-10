let rows = 4;
let cols = 4;
let colors = ['red', 'green', 'blue'];
let table = document.querySelector('#field');
let count = document.querySelector('h1');

let randomColor = function(colors) {
    let randomNum = Math.round(Math.random() * 2);
    return colors[randomNum];
}

count.innerHTML = 0;

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
            let tdColor = this.classList.value;
            let j = 0;
            for (const td of tds) {
                if (td.classList.value == tdColor) {
                    j++;
                }
            }
            count.innerHTML = Number(count.innerHTML) + 1;
            if (j == tds.length) {
                alert('Победа!!!')
            }
            
        })
		tr.appendChild(td);
        
	}
	table.appendChild(tr);
}