// Procesos hijo
const { exec, spawn } = require("child_process");

// Si se esta en windows cambiar el 'ls-la' por 'dir'

// exec("ls -la", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

// codigo para correr otro proceso incluso otro exec de otro programa

// exec("node modulos/consola.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

// ver el proceso con spawn

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.log("¿esta muerto?");
  console.log(process.killed);
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("el proceso terminó");
  console.log(proceso.killed);
});
