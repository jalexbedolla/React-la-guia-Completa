/* Function - Declaration */

//sumar().. se puede mandar llamar ls funcion antes o despues

/* function sumar() {
  console.log(2 + 2);
}

sumar(); */
//sumar();
//sumar();
//sumar();... tambien la podemos mandar llamar varias veces

/* Function - parametros y argumentos leccion 13 */

/* function sumar(numero, numero2 estos de aqui se les conoce como 'parametros') {
  console.log(numero + numero2);
}

sumar(2, 5 y a estos se les conoce como argumentos );
sumar(100, 987); */

/* Function - ... leccion 14 */

/* function sumar(numero, numero2) {
  return numero + numero2;
}
const resultado = sumar(20, 30); */

/* function sumar(numero = 0, numero2 = 0.. esto es parametro por default) {
  return numero + numero2;
}
const resultado = sumar(20, 30); */

// tambien podemos retornar multiples cosas
function sumar(numero, numero2) {
  return [numero + numero2, "hola perrillo"];
}
const [resultado, holaMundo] = sumar(20, 30); // esto es un array destructuring
console.log(resultado);
console.log(holaMundo);
console.log(resultado, holaMundo);

// se puede retornar un objeto?.. si, solo recuerda que los arrays son indexados y los objetos tienen propiedades
function suma(numero, numero2) {
  return {
    resultado2: numero + numero2,
    mensaje: "hola perrillo",
  };
}

const { resultado2, mensaje } = suma(20, 30); // object destructuring

console.log(resultado);

/* asi se veria en react const [ resultado, setResultado] = useState(0).. array destructuring */
