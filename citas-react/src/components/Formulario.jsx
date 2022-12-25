const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y
        <span className='text-orange-500 font-bold'> Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase'
            htmlFor='nombre'
          >
            Mascota
          </label>

          <input
            className='border-2 w-full p-2 mt-2 placeholder-orange-500 rounded-md'
            type='text'
            placeholder='Nombre de la Mascota'
            id='nombre'
          />
        </div>

        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase'
            htmlFor='propietario'
          >
            Propietario
          </label>

          <input
            className='border-2 w-full p-2 mt-2 placeholder-orange-500 rounded-md'
            type='text'
            placeholder='Nombre de la Propietario'
            id='propietario'
          />
        </div>

        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase'
            htmlFor='email'
          >
            Email
          </label>

          <input
            className='border-2 w-full p-2 mt-2 placeholder-orange-500 rounded-md'
            type='email'
            placeholder='Email del Propietario'
            id='email'
          />
        </div>

        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase'
            htmlFor='alta'
          >
            Alta
          </label>

          <input
            className='border-2 w-full p-2 mt-2 placeholder-orange-500 rounded-md'
            type='date'
            id='alta'
          />
        </div>

        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase'
            htmlFor='observaciones'
          >
            Observaciones
          </label>

          <textarea
            className='border-2 w-full p-2 mt-2 placeholder-orange-500 rounded-md'
            placeholder='Describe los Sintomas'
            id='observaciones'
          />
        </div>

        <input
          type='submit'
          className='bg-orange-500 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-orange-600 cursor-pointer transition-all'
          value='Agregar Paciente'
        />
      </form>
    </div>
  )
}

export default Formulario
