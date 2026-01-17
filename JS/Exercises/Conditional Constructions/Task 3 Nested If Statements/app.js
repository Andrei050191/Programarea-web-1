// Task 3: Nested If Statements
// Checks a grade and logs the appropriate message

function checkGrade(grade) {
	if (grade === 'A') {
		console.log("Excellent");
	} else if (grade === 'B') {
		console.log("Good");
	} else if (grade === 'C') {
		console.log("Average");
	} else if (grade === 'D' || grade === 'F') {
		console.log("Needs Improvement");
	} else {
		console.log("Invalid grade");
	}
}

// Example usage:
checkGrade('A'); // Excellent
checkGrade('B'); // Good
checkGrade('C'); // Average
checkGrade('D'); // Needs Improvement
checkGrade('F'); // Needs Improvement
checkGrade('E'); // Invalid grade
