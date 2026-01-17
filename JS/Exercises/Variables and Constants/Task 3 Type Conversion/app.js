// string-uri cu numere
let intString = "42";
let floatString = "3.14";

// conversii
let a = parseInt(intString);
let b = parseFloat(floatString);
let c = Number(intString);
let d = Number(floatString);

// afișare rezultate
console.log("parseInt('42') =", a);
console.log("parseFloat('3.14') =", b);
console.log("Number('42') =", c);
console.log("Number('3.14') =", d);

// comparații suplimentare
console.log("parseInt('3.14') =", parseInt(floatString));
console.log("Number('3.14') =", Number(floatString));
