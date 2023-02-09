import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons'


const MainMap = ({Autos}) => {
return (

    <main>
        
        <div className='Carousel'>
            <div className='ContenedorCarousel'>
            <img className='FotosIndex' src={Autos.Img} alt={Autos.id}></img>
            <div className='VersionSteam'>
                <h2 className='TituloIndexAutos'>{Autos.Modelo}</h2>
                <p className='DescripcionIndex'>{Autos.Descripcion}</p>
                <h4 className='PrecioIndex'>{Autos.Precio} USD$</h4>
                <button className='boton'> <FontAwesomeIcon icon={faMoneyBillAlt}></FontAwesomeIcon>Comprar</button>
            </div>
            </div>
        </div>
    
        
    </main>
)
}

export default MainMap
