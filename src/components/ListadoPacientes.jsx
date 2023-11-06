import { useEffect } from "react"
import Paciente from "./Paciente"
import PropTypes from "prop-types"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) { 

  useEffect(()=>{
    if(pacientes.length > 0){
      console.log('Nuevo Paciente')
    }
  }, [pacientes])

  // console.log(pacientes && pacientes.length ? "Si hay pacientes" : "No hay pacientes")
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-auto">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-5 text-center"> Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-5 text-center"> Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
};
export default ListadoPacientes
