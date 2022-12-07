const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "alex",
  premium: true,
};

//const nuevoObjeto = Object.assign(producto, cliente)... esto no se puede utilizar en react

// ahora.. concatenamos
const nuevoObjeto2 = {
  producto: { ...producto },
  cliente: { ...cliente },
};

console.log(nuevoObjeto2);
console.log(cliente);
console.log(producto);

/* en React ocupamos metodos 'no mutables', en react se trata de estar modificando los arreglos originales */
