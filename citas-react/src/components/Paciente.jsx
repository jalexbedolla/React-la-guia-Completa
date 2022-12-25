const Paciente = () => {
  return (
    <div className='bg-white shadow-md m-4 px-5 py-5 rounded-lg'>
      <p className='mb-3 uppercase'>Nombre:
        <span className='font-normal normal-case text-orange-500'> Hook</span>
      </p>

      <p className='mb-3 uppercase'>Propietario:
        <span className='font-normal normal-case text-orange-500'> Alex Bedolla</span>
      </p>

      <p className='mb-3 uppercase'>Email:
        <span className='font-normal normal-case text-orange-500'> hola@mundo.org</span>
      </p>

      <p className='mb-3 uppercase'>Fecha Alta:
        <span className='font-normal normal-case text-orange-500'> 24/dic/2022</span>
      </p>

      <p className='mb-3 uppercase'>Observaciones:
        <span className='font-normal normal-case text-orange-500'> Se la pasa de huevon..
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, accusamus ducimus pariatur nihil laborum quidem illum quaerat accusantium veniam iure dicta placeat harum vero fugiat laboriosam repudiandae rerum ratione eaque.
        </span>
      </p>
    </div>
  )
}

export default Paciente
