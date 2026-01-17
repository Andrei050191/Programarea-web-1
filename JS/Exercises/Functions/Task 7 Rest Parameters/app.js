// function declaration cu rest parameters
function average(...numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum / numbers.length;
}

// apeluri ale funcției
console.log("Media:", average(10, 20, 30));        // 20
console.log("Media:", average(5, 10, 15, 20));     // 12.5
console.log("Media:", average(2, 4));              // 3
