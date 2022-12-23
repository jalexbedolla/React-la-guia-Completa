/*  Eventos del DOM - Clicks */

/*  e aqui difernetes formas de trabajar con el 'click' */

const heading2 = document.querySelector('click', clickHeading /* sin los parantesis espera a que la mandes llamar */)
function clickHeading() {
  console.log('desde la funcion por separado')
  /* tambien puedes crear una funcion y mandarla llamara por separado */
}
/* curiosmanete si lo haces como function espression no te va a funcionar..  */


const heading = document.querySelector('#heading')
heading.addEventListener('click',/* el primer parametro es el tipo de evento */ 
  function()/* despues es una funcion callback */ {
  console.log('diste click en el heading')
})

const heading1 = document.querySelector('#heading')
heading1.addEventListener('click', () => {
  console.log('diste click en el heading')
})

const enlaces = document.querySelectorAll('.navegacion a')
  enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
      console.log('diste click en enlace.. ejecutado con un forEach')
    })
  })

  /* esto es simple y sencillamente porque no podemos usar ' querySellectorAll' para multiples elementos
    tenemos que iterar */

const titulo =document.querySelector('#heading')
  titulo.addEventListener('click', () => {
    heading.textContent = 'nuevo titulo al dar cick'
  })





