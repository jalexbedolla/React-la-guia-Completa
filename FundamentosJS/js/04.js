// Objetos

/* metodo mediante variables
const nombre = 'tablet
const precio = 300
const disponible = true */

/* contruyyendo un objeto */
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};
/* de esta forma en lugar de tener 3 variable
 vamos a tener una sola en un objet */
/*  el objeto esta compuesto por 'key' and 'value' */
console.log(producto);
console.table(producto);

/* ahora como accedemos a estas propiedades?
bueno, usamos la sintaxis de ' . '  */
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Destructuring

/*es una de las grande mejoras de 'js' es el 'destructuring.
que es practicamente desbaratar un objeto */

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

/* ahora, tambien podemos acceder a un valor que no existe en el objeto
solamente la va marcar como undefined */
const { imagen } = producto;
console.log(imagen);
// te crea la variable aunque no exista

/* object literal enhancement
  que vendria a ser todo lo contrario a 'destructuring'
  sirve para acomodar variables dentro de un objeto */

const autenticado = true;
const usuario = "alex";

const nuevoObjeto = {
  autenticado: autenticado,
  usuario: usuario,
};

/*
cuando ambos son iguales.. puedes quitar uno de los 2 
const nuevoObjeto = {
  autenticado,
  usuario:
};
*/
console.log(nuevoObjeto);
