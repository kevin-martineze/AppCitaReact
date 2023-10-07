import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(()=>{
    if ( Object.keys(paciente).length > 0) {
      console.log('Si hay algo')
    } 
  }, [paciente])




  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacio')

      setError(true)
      return;
    }

    setError(false)

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }

    setPacientes([...pacientes, objetoPaciente]);

    // Reiniciar el formulario al estado inicial (vacio)
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-5'>Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input id='mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Nombre de la Mascota' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input id='propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Nombre del propietario' value={propietario} onChange={(e) => setPropietario(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Correo electronico</label>
          <input id='email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email" placeholder='Correo electronico' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input id='alta' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea id='sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los sintomas' type="text" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        </div>

        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' value="Agregar Paciente" />


      </form>
    </div>
  )
}

export default Formulario
