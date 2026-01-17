// funcție anonimă atribuită unei variabile
const celsiusToFahrenheit = function (celsius) {
  return (celsius * 9 / 5) + 32;
};

// apelarea funcției
let result = celsiusToFahrenheit(25);

// afișare rezultat
console.log("25°C în Fahrenheit este:", result);
