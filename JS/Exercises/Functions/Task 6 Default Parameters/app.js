// function declaration cu parametri default
function greet(name = "Utilizator", message = "Bun venit") {
  return message + ", " + name + "!";
}

// apeluri ale funcției
console.log(greet()); 
console.log(greet("Andrei"));
console.log(greet("Maria", "Salut"));
