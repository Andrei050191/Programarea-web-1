// funcție care acceptă un callback
function processArray(numbers, callback) {
  let result = [];

  for (let num of numbers) {
    result.push(callback(num));
  }

  return result;
}

// callback-uri
function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

// apeluri
let values = [1, 2, 3, 4, 5];

console.log("Dublu:", processArray(values, double));
console.log("Pătrat:", processArray(values, square));

// callback anonim
console.log(
  "Plus 10:",
  processArray(values, function (x) {
    return x + 10;
  })
);
