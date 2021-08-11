// Errores
function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.log("Error en mi función asincrona");
      cb(err);
    }
  });
}

try {
  //   otraFuncion();
  seRompeAsincrona(function (err) {
    console.log("Hay error ", err);
  });
} catch (err) {
  console.error("Vaya, algo se ha roto... ", err);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aqui va al final");
