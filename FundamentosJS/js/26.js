/*  eventos del DOM - submit */

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
  e.preventDefault()// esto es para que el navegador no salga con sus mamadas

  const nombre = document.querySelector('.nombre').value // ojo con esto.. se leconoce como chaining
// que es lo mismo que esto:
  //console.log(nombre /* y quitas este .value.. ya no lo necesitas */)
  const password = document.querySelector('.password').value

  // ejemplo de una validacion con un mensaje a la consola de todos los campos son obligatorios
  if(nombre === '' || password === '' ) {
    console.log('todos los pinchis campos son obligatorios')
  } else{
    console.log('todo tranquis perro..!!')
  }

  //console.log('enviaste formulario pero con preventDefault')
})

