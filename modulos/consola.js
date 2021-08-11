var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra",
  },
];

function function1() {
  console.group("funcion 1");
  console.log("Esto es de la función 1");
  console.log("esto tambien");
  console.log("esto tambien");
  function2();
  console.log("Volvemos a la función 1");
  console.groupEnd("funcion 1");
}

function function2() {
  console.group("funcion 2");
  console.log("Ahora estamos en la función 2");
  console.groupEnd("funcion 2");
}

// console.group("informacion");
// console.log("Algo");
// console.info("Algo");
// console.error("Algo");
// console.warn("Algo");
// console.groupEnd();

// console.group("Tabla");
// console.log(tabla);
// console.table(tabla);
// console.groupEnd();

// console.group("Conversación");
// console.log("Conversación");
// console.log("Hola");
// console.log("Blablabla");
// console.log("Adios");
// console.groupEnd("Conversación");

// console.log("otra cosa de otra función");

// console.log("empezamos");
// function1();

console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
