// var – scope de funcție
var name = "Andrei";

// let – scope de bloc
let age = 35;

// const – scope de bloc, valoare constantă
const isStudent = true;

// afișare în consolă
console.log("Nume:", name);
console.log("Vârsta:", age);
console.log("Este student:", isStudent);

// demonstrarea diferenței de scope
if (true) {
  var a = "vizibil cu var";
  let b = "vizibil doar în bloc";
  const c = "constant, doar în bloc";
}

console.log(a); // ✅ funcționează
// console.log(b); // ❌ eroare
// console.log(c); // ❌ eroare
