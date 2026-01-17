// variabilă GLOBALĂ
var globalVar = "Variabilă globală";

function testScope() {
  // variabilă LOCALĂ (scope de funcție)
  var functionVar = "Variabilă locală în funcție";

  console.log(globalVar);      // ✅ accesibilă
  console.log(functionVar);    // ✅ accesibilă

  if (true) {
    // var NU are block scope
    var varBlock = "var în if";

    // let și const AU block scope
    let letBlock = "let în if";
    const constBlock = "const în if";

    console.log(varBlock);     // ✅
    console.log(letBlock);     // ✅
    console.log(constBlock);   // ✅
  }

    console.log(varBlock);       // ✅ funcționează
   // console.log(letBlock);    // ❌ eroare
    //console.log(constBlock);  // ❌ eroare
}

testScope();

// acces din afara funcției
console.log(globalVar);        // ✅
// console.log(functionVar);   // ❌ eroare
