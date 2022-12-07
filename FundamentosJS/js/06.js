// Objetoss - Destructuring con 2 o mas objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "alex",
  premium: true,
};

const { nombre, precio, disponible } = producto;
console.log(nombre, precio, disponible);
// 'destructuring'... te crea la variable y extrae el valor

// creacion de un alias para variables que se llaman igual
const { nombre: nombreCliente, premium } = cliente;
console.log(cliente);
