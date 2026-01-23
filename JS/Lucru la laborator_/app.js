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
const square = x => x*x;
console.log(square(10));



console.log("Exercitiul 11");

function displaysName(name="Jora") {
    console.log("Numele meu este: " + name + "!");
}
displaysName("Ungureanu Andrei");


console.log("Exercitiul 12");
function applyCallback(callback, number) {
    return callback(number);
}
const call = (n) => n * 2;

const rezultat = applyCallback(call, 10);

console.log(rezultat);



console.log("Exercitiul 13");
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    }
}
const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(10));


console.log("Exercitiul 14");
sum = 0;
for(let i = 1; i <= 100; i++) {
    sum=sum + i;
}
console.log(sum);


console.log("Exercitiul 15");
let i=2;
while(i <= 50) {
    console.log(i);
    i=i+2;
}



console.log("Exercitiul 16");
function countVowels(text) {
    let count = 0;
    let vowels = "aăâeiîouAĂÂEIÎOU";

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("Ungureanu Andrei")); 



console.log("Exercitiul 17");
let text = "javascript";
let reversedText = "";
for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
}
console.log("Textul direct:"+ text);
console.log("Textul inversat:"+ reversedText);



console.log("Exercitiul 18");

for (let i = 1; i <= 20; i++) {
    if (i === 10) continue; 
    if (i === 16) break;    
    console.log(i);
}