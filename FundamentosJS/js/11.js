/* Iteradores en Arrays */

const tecnologias = ["HTML", "CSS", "javaScript", "React", "Node.js"];

// .forEach - te permite acceder a cada elemento del array 'solo acceder'
const arrayForEach = tecnologias.forEach(function (tech) {
  return tech;
  //console.log("ejecutando funcion");
});

// .map - te crea un nuevo arreglo
const arrayMap = tecnologias.map(function (tech) {
  return tech;
  //console.log("ejecutando funcion");
});

console.log(arrayForEach);
console.log(arrayMap);
