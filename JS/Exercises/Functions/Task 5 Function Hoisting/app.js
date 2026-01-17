// ===============================
// FUNCTION DECLARATION
// ===============================

// apelăm funcția ÎNAINTE de definiție (funcționează)
console.log("Suma (declaration):", add(5, 10));

function add(a, b) {
  return a + b;
}

// ===============================
// FUNCTION EXPRESSION
// ===============================

// ❌ dacă decomentezi linia de mai jos, va apărea eroare
// console.log("Pătrat (expression):", square(5));

const square = function (x) {
  return x * x;
};

// apelăm funcția DUPĂ definiție (funcționează)
console.log("Pătrat (expression):", square(5));
