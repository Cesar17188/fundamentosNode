//FILE SYSTEM
const fs = require("fs");
const { dirname } = require("path/posix");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    // leido
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribirlos ", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);
// leer(__dirname + "/archivo1.txt", console.log);
borrar(__dirname + "/archivo1.txt", console.log);
