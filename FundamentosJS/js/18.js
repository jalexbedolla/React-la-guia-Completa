/*  comparador y operador estricto */

const numero1 = 20;
const numero2 = "20";

if (numero1 == numero2) {
  console.log("si.!... si son iguales");
} else {
  console.log("no.!... no son iguales");
}

/* == ... comparador no estricto o similar
   ===... comparador estricto. este revisa el valor y el tipo de dato */

const numero3 = 20;
const numero4 = "20";

if (numero3 === numero4) {
  console.log("si.!... si son iguales");
} else {
  console.log("no.!... no son iguales");
}
// porque no son iguales.. e aqui la respuesta
console.log(typeof numero3);
console.log(typeof numero4);

// funciones coercitivas
/*Coerción
La coerción es la conversión automática o implicita de valores de un tipo de dato a otro (Ejemplo: de cadena de texto a número). La conversión es similar a la coerción porque ambas convierten valores de un tipo de dato a otro pero con una diferencia clave - la coerción es implícita mientras que la conversión puede ser implícita o explícita.

Examples
const valor1 = '5';
const valor2 = 9;
let suma = valor1 + valor2;

console.log(suma);
Copy to Clipboard
En el ejemplo anterior, JavaScript ha coercido el 9 de nùmero a cadena de texto y luego ha concatenado los dos valores resultando en una cadena de texto de 59. JavaScript tuvo la opción de coercer a cadena de texto o número y decidió usar número. */

/* string to number */
const numero5 = 20;
const numero6 = "20";

if (numero5 === Number(numero6)) {
  // ojo aqui. convertimos el 'string' a 'number'
  console.log("si.!... si son iguales");
} else {
  console.log("no.!... no son iguales");
}

/* number to string */
const numero7 = 20;
const numero8 = "20";

if (String(numero5) === numero6) {
  // ojo aqui. convertimos el 'numero' a 'string'
  console.log("si.!... si son iguales");
} else {
  console.log("no.!... no son iguales");
}

// esto es super util cuando estamos trabajando con lo que nos envia de la base de datos

// esto es codigo mal escrito
const autenticado = true;
if (autenticado === true) {
  console.log("si esta autenticado");
}

// buenas practicas
const autenticadito = true;
if (autenticadito) {
  /* porque esto ya me esta regresando un true */
  console.log("si");
}
