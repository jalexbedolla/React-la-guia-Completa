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
const resultado = numeros.every((numero) => numero > 15);
const resultado1 = numeros.every((numero) => numero > 9);

console.log(resultado);
console.log(resultado1);
