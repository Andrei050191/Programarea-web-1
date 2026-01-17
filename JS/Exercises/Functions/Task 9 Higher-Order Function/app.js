// funcție care creează o funcție de înmulțire (closure)
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// folosirea closure-ului
const multiplyBy2 = createMultiplier(2);
const multiplyBy5 = createMultiplier(5);

// apeluri
console.log("2 × 4 =", multiplyBy2(4)); // 8
console.log("5 × 3 =", multiplyBy5(3)); // 15
