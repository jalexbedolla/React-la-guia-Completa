/* scope de las variables */
// hace referencia a las variables de alcanze local y global

const precio = 300; // a esta se le conoce como variable global

function unaFuncion() {
  const precio = 600; // y esta como variable local que solo vive dentro de la funcion
  console.log(precio);
}
unaFuncion();

console.log(precio);

// listos porque esta es pregunta de examen
