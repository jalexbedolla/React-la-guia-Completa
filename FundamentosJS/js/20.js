/* ternarios */

const autenticado = true;
// un ternario es basicamente un 'if' en una sola linea

autenticado
  ? /* si esta condicion se cumple ejecuta este codigo */ console.log(
      "usuario autenticado"
    )
  : /* y si no ejecuta este otro */
    console.log("dirigir al login");

/* tambien podemos negar con un condicional '!'.. (not) */
const autenticado1 = true;
// un ternario es basicamente un 'if' en una sola linea

!autenticado1
  ? /* si esta condicion se cumple ejecuta este codigo */ console.log(
      "usuario autenticado"
    )
  : /* y si no ejecuta este otro */
    console.log("dirigir al login");

/* doble ternario */

const saldo = 600;
const pagar = 700;
const tarjeta = false;

saldo > pagar
  ? console.log("si puedes pagar")
  : tarjeta
  ? console.log("puedes pagar con la tarjeta")
  : console.log("no puedes pagar");
