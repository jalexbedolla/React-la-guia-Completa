/* Template Strings */

const producto = 'Tablet de 12 pulgadas'
const precio = 400
const marca = 'Orange'

function textoDeLaFuncion() {
  return "Este texto proviene de la funcion"
}

/* anteriormente en js asi se concatenaba... era un pedonon, aparte de que se ve horrible y poco legible */
console.log( producto + " " + precio + " " + marca) // que horror..!!

/* afortunadamente, llego ES6 e implementaron los 'template strings' */
console.log(`${producto} A solo: $${precio} dlls. Marca: ${marca}`)

/* tambien podemos agregar funciones.. no solamente variables */
console.log(`${producto} A solo: $${precio} dlls. Marca: ${marca}. ${textoDeLaFuncion(/* tienes que mandar llamar la funcion pendejo */)}`)

/* ` ..estas madres se llaman "backticks" */

/* por fin terminamos el repaso a js */