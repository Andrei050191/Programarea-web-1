// IIFE – se execută imediat după definire
(function () {
  let message = "Acesta este un mesaj din IIFE";
  const secretNumber = 42;

  console.log(message);
  console.log("Număr secret:", secretNumber);
})();

// variabilele din IIFE NU sunt accesibile aici
// console.log(message);      // ❌ eroare
// console.log(secretNumber); // ❌ eroare

console.log("Codul global continuă să ruleze.");
