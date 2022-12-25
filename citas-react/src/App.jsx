import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App () {
  return (
    <div className='container mx-auto mt-12'>
      <Header />
      <div className='sm:flex mt-12'>
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
