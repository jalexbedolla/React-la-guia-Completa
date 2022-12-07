// Objetos - Manipulacion

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

// Object.freeze(producto); no te deja modificar nada
// Object.seal(producto) - te deja modificar las propiedades existentes nada mas. no puedes agregar o eliminar

// aqui rescribe el valor
producto.nombre = "monitor curvo";
console.table(producto);

// si no existe el valor, lo agrega
producto.imagen = "imagen.jpg";
console.table(producto);

//eliminar una propiedad
delete producto.disponible;
console.table(producto);
