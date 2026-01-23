console.log("Exercitiul 1 ");
let nume = "Ungureanu Andrei";
console.log(nume);

var age = 35;
console.log(age, "ani");

const angajat = true;
console.log("Angajat:", angajat);


console.log("Exercitiul 2");
let a=4;
let b=5;
function compareNumbers(a, b) {
    if (a > b) return console.log("a este mai mare");
    if (a < b) return console.log("b este mai mare");
    if (a == b) return console.log("egale");
}
compareNumbers(a, b);


console.log("Exercitiul 3");
let n = -9;

let result = (n > 0) ? "positiv" 
           : (n < 0) ? "negativ" 
           : "zero";

console.log(result);

console.log("Exercitiul 4");
age= 13;

if (age < 18) {
    console.log("nu poate vota");
}
else {
    console.log("poate vota");
}


console.log("Exercitiul 5");

function gradeResult(grade) {
    if (grade >= 90 && grade <= 100) {
        console.log("Excelent");
    } else if (grade >= 70 && grade < 89) {
        console.log("Bine");
    } else if (grade >= 50 && grade < 69) {
        console.log("Satisfacator");
    } else if (grade < 50 && grade == 0) {
        console.log("Insuficient");
    } else {
        console.log("Nota invalida");
    }
}

gradeResult(52);




console.log("Exercitiul 6");
grade1 = 4 ;
switch (grade1) {
    case 0:
        console.log('Foarte sarac');
        break;
    case 1:
        console.log('Sarac');
        break;
    case 2:
        console.log('Suficient');
        break;
    case 3:
        console.log('Bine');
        break;
    case 4:
        console.log('Foarte bine');
        break;

}




console.log("Exercitiul 7");
let isAdmin = false;
let isModerator = true;

let canAccess = isAdmin || isModerator;

console.log(canAccess ? "Acces permis" : "Acces interzis");




console.log("Exercitiul 8");
function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password);
}

console.log(validatePassword("Andrei163303")); 


console.log("Exercitiul 9");
function calculateAreaOfRectangle(length, width) {
    return length * width;
}
console.log(calculateAreaOfRectangle(5, 3));




console.log("Exercitiul 10");
function squareNumber(n) {
    return n * n;
}
console.log(squareNumber(7));



console.log("Exercitiul 11");

function displaysName(name) {
    console.log("Numele meu este " + name);
}
displaysName("Ungureanu Andrei");


console.log("Exercitiul 12");

function applyCallback(num, callback) {
    return callback(num);
}
applyCallback(5, function(n) {
    return n * n;