// declarăm 5 variabile dintr-o singură instrucțiune (destructuring)
const [a, b, c, d, e] = [10, 20, 30, 40, 50];

console.log("Valori inițiale:");
console.log("a =", a, "b =", b, "c =", c, "d =", d, "e =", e);

// swap valori folosind destructuring
let x = a;
let y = b;

// schimbăm valorile lui x și y
[x, y] = [y, x];

console.log("După swap:");
console.log("x =", x);
console.log("y =", y);

// swap direct între c și d
let c1 = c;
let d1 = d;

[c1, d1] = [d1, c1];

console.log("Swap c și d:");
console.log("c =", c1);
console.log("d =", d1);
