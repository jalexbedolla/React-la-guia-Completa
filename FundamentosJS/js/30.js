/* fetch API - Async Await*/

const url = "https://jsonplaceholder.typicode.com/comments"

/* promises */

/* const consultarAPI = () => {
  fetch(url)
    .then( respuesta => respuesta.json())
    .then((resultado) => {
      resultado.forEach(comentarios => {
        console.log(comentarios)
      })
    })
} 
consultarAPI() */

/* Async Await */

/* const consultarAPI = async () => {
  const respuesta = await fetch(url)  */
  /* en lugar del '.then' tenemos el 'await' y este await previene que la linea de abajo aun no se ejecute hasta que la respuesta de la API este completa */
  /* const resultado = await respuesta.json()
    resultado.forEach(comentario => {
      console.log(comentario)
    }) */

//} /* funciones asincronas.. que utiliza function expression */
//consultarAPI()

/* y asi es como se veria ejemplificado en tiempo real */
const consultarAPI = async () => {
  const respuestaAPI = await fetch(url)
    console.log(respuestaAPI)
      console.log('despues de respuesta')
  const resultadoAPI = await respuestaAPI.json()
    console.log(resultadoAPI)
      console.log('despues de resultado`')
      
}
consultarAPI()