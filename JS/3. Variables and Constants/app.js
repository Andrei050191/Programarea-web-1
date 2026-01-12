console.log("Hello from app.js");
let x = 2;
let y = 3;

console.log('x=', x);
console.log('y=', y);

let r = 23;
const pi = 3.14;

console.log('r =', r);
console.log('pi =', pi);

let area = pi * r * r;
console.log('Area =', area);

r = 46;
console.log('New r =', r);

area = pi * r * r;
console.log('New Area =', area);

pi = 3.14159; // This will cause an error because pi is a constant
console.log('New pi =', pi);