/* fetch API - Async Await ( Multiples llamados )*/

const url = "https://jsonplaceholder.typicode.com/comments"
const url1 = "https://jsonplaceholder.typicode.com/photos"

/* forma incorrecta.. nos trae problemas de performance */

const consultarAPI = async () => {
  /* para medir el performance */
  const inicioPerformanceTest = performance.now()

  const respuestaAPI = await fetch(url)
  const resultadoAPI = await respuestaAPI.json()
    /* console.log(resultadoAPI)
    console.log('iniciando segunda consulta')  */
    
  const respuestaAPI1 = await fetch(url1)
  const resultadoAPI1 = await respuestaAPI1.json()
    /* console.log(resultadoAPI1) */

  const finPerformanceTest = performance.now()
    console.log(`PRIMER async: ${finPerformanceTest - inicioPerformanceTest} ms`)

  }
consultarAPI()

/* forma correcta... inician al mismo tiempo. pero terminan diferente segun su contenido */

const consultarAPI2 = async () => {
  
  const inicioPerformanceTest = performance.now()

  const 
    [respuestaAPI, respuestaAPI1] /* array destructuring */
    = await Promise.all([ fetch(url), fetch(url1)])
  
    const resultadoAPI = await respuestaAPI.json()
    const resultadoAPI1 = await respuestaAPI1.json()

    /* console.log(resultadoAPI)
    console.log(resultadoAPI1) */

    const finPerformanceTest = performance.now()
    console.log(`SEGUNDO async: ${finPerformanceTest - inicioPerformanceTest} ms`)


  }
consultarAPI2()