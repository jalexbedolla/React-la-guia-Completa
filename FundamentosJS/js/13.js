/* Function Expression */

// esto es function declaration el video anterior
function sumar(numero, numero2) {
  console.log(numero + numero2);
}

// y esto es function expression
const suma = function () {};

/* la primera diferencia es que el nombre la funcion pasa al lado derecho de la variable.
 la segunda... en function expression no puedes mandar llamar la funcion antes de.. por que la va a ignorar
 porque? porque en function declaration js primero registra todas las funciones en una fase de creacion y despues las ejecuta en la segunda vuelta. en expression es diferente. proque la funcion comienza con una variable.. y las variables no se registran en la fase de creacion. es hasta la fase de ejecucion cuando se registran
 la mas importante.. 'las arrow function' que solamente se utilizan en function expression */
