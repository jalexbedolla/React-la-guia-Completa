/* operadores ||..(or) &&..(and) !..(not) */
const saldo = 600
const pagar = 500
const tarjeta = true

/*
|| - al menos un debe cumplirse
&& - todas deben de cumplirse 
 */

if(saldo > pagar && tarjeta) {
  console.log('puedes pagar')
} else {
  console.log('no puedes pagar')
}
