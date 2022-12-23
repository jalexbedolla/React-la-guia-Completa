/*  genenrando codigo HTML con js */

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
  e.preventDefault()// esto es para que el navegador no salga con sus mamadas

  const nombre = document.querySelector('.nombre').value
  const password = document.querySelector('.password').value

  /* para que no se repinte a alerta en la pantalla multiples veces */
  const alertaPrevia = document.querySelector('.alerta')
  if(alertaPrevia) {
    alertaPrevia.remove()
  }

  const alerta = document.createElement('DIV')
  /* es recomendable escribir las etiquetas en mayusculas cuando las ijectamos por medio de js */
  alerta.classList.add('alerta')

  // ejemplo de una validacion con un mensaje a la consola de todos los campos son obligatorios
  if(nombre === '' || password === '' ) {
    alerta.textContent = 'todos los campos son obligatorios'
    alerta.classList.add('error')
  } else{
    alerta.textContent = 'todos bien..'
    alerta.classList.add('exito')
  }
  formulario.appendChild(alerta)
})