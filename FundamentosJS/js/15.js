/*  mas de arrow function */

const tecnologias = ["HTML", "CSS", "javaScript", "React", "Node.js"];

/* const nuevoArray = tecnologias.map(function (tech) {
  if (tech === "HTML") {
    return "GrapQL";
  } else {
    return tech;
  }
}); */

// esta misma funcion pero con arrow function
/* const nuevoArrayArrowFunction = tecnologias.map((tech) => {
  if (tech === "HTML") {
    return "GrapQL";
  } else {
    return tech;
  }
}); */

// filter te retorna un nuevo array
const nuevoArray2 = tecnologias.filter(function (tech) {
  return tech === "HTML"; //  los que sean diferentes a
}); //en lugar de aprender 5 metodos de js. con filter puedes hacer lo mismo nada mas cambiando la condicion

/*  donde '===' es estrictamente igual a:,
y '!==' es diferente a: */

// esta misma funcion ahora en arrow function
const nuevoArroFunction = tecnologias.filter((tech) => tech !== "HTML");
// eliminamos la 'palabra funcion' y el 'return' y podemos poner todo en una sola linea

// console.log(nuevoArray);
console.log(nuevoArroFunction);
