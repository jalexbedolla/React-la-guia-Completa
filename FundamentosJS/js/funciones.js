function sumar(numero1, numero2) {
  return numero1 + numero2
}

function restar(numero1, numero2) {
  return numero1 - numero2
}

/* export default sumar.. solo se usa cuando es unico.. o una sola funcion */

/* para multiples funciones.. object literal enhancement */
export {
  sumar,
  restar
}