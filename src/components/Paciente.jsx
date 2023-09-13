
function Paciente() {
    return (
            <div className="m-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">Hook</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">Kevin</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Correo electronico: {''}
                    <span className="font-normal normal-case">correo@corre.com</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                    <span className="font-normal normal-case">10 Agosto 2022</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                    <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia adipisci iure necessitatibus ea doloribus pariatur in inventore magni, error sunt vel ab illo velit totam voluptate quia eaque, dicta assumenda.</span>
                </p>
            </div>
    )
}

export default Paciente
