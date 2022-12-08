/* Array Methods */
const tecnologias = ["HTML", "CSS", "javaScript", "React", "Node.js"];
const numeros = [10, 30, 50];

let nuevoArray;

// '.filter..
nuevoArray = tecnologias.filter((tech) => tech !== "HTML");

// '.include'.. nos permite comprobar si un elemento existe en el 'array'
/* const resultado = tecnologias.includes("React");
const resultado1 = tecnologias.includes("GraphQL"); */

// '.some... nos permite comprobar si por lo menos una condicion se cumple aunque sea una vez
/* const resultado = numeros.some((numero) => numero > 15);
const resultado1 = numeros.some((numero) => numero > 50);

console.log(resultado);
console.log(resultado1); */

// .find.. no devuelve el primero que cumpla la condicion
/* const resultado = numeros.find((numero) => numero > 15);
const resultado1 = numeros.find((numero) => numero < 50);

console.log(resultado);
console.log(resultado1); */

// .every.. nos retorna true or false si todos cumplen la condicion
/* const resultado = numeros.every((numero) => numero > 15);
const resultado1 = numeros.every((numero) => numero > 9); */

// .reduce.. se va acumulando en el total
/* const resultado = numeros.reduce((total, numero) => numero + total, 0);
const resultado1 = numeros.reduce((total, numero) => numero + total, 100); */

// .filter crea un nuevo arreglo en base a una condicion
/* const resultado = tecnologias.filter((tech) => tech === "Node.js");
const resultado1 = tecnologias.filter((tech) => tech !== "Node.js");
const resultado2 = numeros.filter((numero) => numero > 15);

console.log(resultado);
console.log(resultado1);
console.log(resultado2); */

// y estos ejemplos vienen del archivo 11.js ahora los pasamos a arrow function
// .forEach - te permite acceder a cada elemento del array 'solo acceder'
const arrayForEach = tecnologias.forEach(function (tech) {
  return tech;
  //console.log("ejecutando funcion");
});
// arrow function method
tecnologias.forEach((tech) => console.log(tech));

// .map - te crea un nuevo arreglo
const arrayMap = tecnologias.map(
  (tech) => tech
  //console.log("ejecutando funcion");
);

// console.log(arrayForEach);
console.log(arrayMap);
