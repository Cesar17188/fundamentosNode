function hola(nombre, miCallback) {
  //   console.log("Hola, soy una función asíncrona");
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios, " + nombre);
    otroCallback();
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, veces - 1, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

// --

console.log("Iniciando proceso... ");
hola("Cesar", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso terminado");
  });
});

// hola("Cesar", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("Terminando proceso... ");
//         });
//       });
//     });
//   });
// });
