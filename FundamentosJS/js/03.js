/* Tipos de datos */

// Undefined
/* let cliente;
console.log(cliente);
console.log(typeof cliente); */

/* Boolean */
// 'true' 'false'
/* const descuento = false;
console.log(descuento);
console.log(typeof descuento); */

/* Number */
// en js todos son numero

/* const numero1 = 20.2;
const numero2 = 30;
const numero3 = -100;

console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3); */

/* 'Strings' o Cadenas de Texto */

/* const alumno = 'alex' o comillas sencillas
let producto = "Monitor 20 pulgadas" comillas dobles
let producto2 = 'Tv" no puedes mezclar las comillas */

/* const numero = "20"; lo toma como string
const numero2 = 20; y este como numero

console.log(typeof numero);
console.log(typeof numero2); */

/* BigInt */
//const numeroGrande = BigInt(4385729376923875923745 - 9823746923769 - 8234);
//console.log(typeof numeroGrande);

//const numero = 10;
//const nuemro2 = 20;

//console.log(numero + nuemro2);
// console.log(numero + numeroGrande); no se pueden mexclar numeros regulares con un BigInt
//sin embargo con la 'cohercion' si podemos hacerlo
//console.log(numero + Number(numeroGrande));

/* const numero = "30";
const numero2 = 30;

console.log(typeof String(numero2));
console.log(typeof Number(numero)); */

/*  Symbol */
// su caracteritica principal es que es un dato unico
/* const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol === segundoSymbol);

console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf()); */

/*  null */
const descuento = null;
console.log(typeof descuento);
// ojo aqui.. consultar la pagina de 'mdn' para conocer mas hacerca de las estructura de datos
