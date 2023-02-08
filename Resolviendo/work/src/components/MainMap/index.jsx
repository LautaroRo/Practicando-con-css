import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCarRear} from '@fortawesome/free-solid-svg-icons'

const MainMap = ({Autos}) => {
return (

    <main>
        <div className='contenedorAutos'>
            <div className='contenedor'>
                <h2 className='tituloAutoPrinc'>{Autos.NombrePrinc}</h2>
                <p className='DescripcionPrinc'>{Autos.DescripcionPrinc} Ah tan solo {Autos.PrecioPinc} USD$</p>
                <button className='botonPric'><FontAwesomeIcon icon={faCarRear}></FontAwesomeIcon> Comprar</button>
            </div>
        </div>
    </main>
)
}

export default MainMap
