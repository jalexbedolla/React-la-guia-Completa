// Operaciones en los arreglos

const tecnologias = ["HTML", "CSS", "javaScript", "React", "Node.js"];

/* Añadir elementos al 'array' */
//tecnologias.push("GraphQL"); // añade al final del array
//tecnologias.unshift("GraphQL"); // añade al inicio del array
/* pero esto es un no en react porque modifica el arreglo original */

/* la manera correcta de hacer esto en react, porque esto no modifica el arreglo original */
// const nuevoArreglo = [...tecnologias, "GraphQL"]; 'push'
//const nuevoArreglo = [ "GraphQL",...tecnologias];// 'unshift'

// Eliminar elementos del 'array'
// tecnologias.pop().. esto elimina un elemento del final de un arreglo en js
// tecnologias.shift() esto elimina del inicio
// tecnologias.splice(2, 1) para eliminar un elemento en specifico

/* filter te retorna un nuevo array */
//const nuevoArray = tecnologias.filter(function (tech) {
//return tech !== "HTML"; //  los que sean diferentes a
//}); /* en lugar de aprender 5 metodos de js. con filter puedes hacer lo mismo nada mas cambiando la condicion */

const nuevoArray = tecnologias.map(function (tech) {
  if (tech === "HTML") {
    return "GrapQL";
  } else {
    return tech;
  }
});

/* const nuevoArray = tecnologias.filter(function (tech) {
  return tech === "HTML"; os que sean iguales a
}); */

// Remplazar elementos del 'array'

console.table(tecnologias);
console.table(nuevoArray);
