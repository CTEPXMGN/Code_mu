function getLastDay(month, year) { 

	let lastDays = [31, 28, 31, 30, 31, 30, 31, 
		31, 30, 31, 30, 31]; 
	
	if (month != 1) {
		return lastDays[month];
	} else {
		let date = new Date(year, 2, 0).getDate();

		return date;
		
	}
}


console.log(getLastDay(1, 2020));