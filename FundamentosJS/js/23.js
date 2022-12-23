/* manipulando el DOM con js*/

const heading = document.querySelector('.heading')
heading.textContent = 'Un Nuevo Heading'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'un nuevo valor con js'

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace')
/* y esto me modifico el DOM. sin necesidad de reinscribir el HTML */