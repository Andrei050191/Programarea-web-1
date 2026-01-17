// Task 4: Switch Statement
// Function that takes a day number (1-7) and returns the day name

function getDayName(dayNumber) {
	switch(dayNumber) {
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
		case 7:
			return "Sunday";
		default:
			return "Invalid day number";
	}
}

// Example usage:
console.log(getDayName(1)); // Monday
console.log(getDayName(5)); // Friday
console.log(getDayName(7)); // Sunday
console.log(getDayName(0)); // Invalid day number
