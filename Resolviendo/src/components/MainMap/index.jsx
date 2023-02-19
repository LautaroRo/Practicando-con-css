import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const MainMap = ({Autos}) => {
return (

    <main>
        
        <div className='Carousel'>
            <div className='ContenedorCarousel'>
                <div className='FotoSombra'>
                    <img className='FotosIndex' src={Autos.Img} alt={Autos.id}></img>
                </div>
            <div className='divSteam'>
            <div className='VersionSteam'>
                <h2 className='TituloAutos'>{Autos.Modelo}</h2>
                <p className='DescripcionIndex'>{Autos.Descripcion}</p>
                <div className='PrecioYboton'>
                    <h4 className='PrecioIndex'>{Autos.Precio} USD$</h4>
                    <Link className="LinkMap" to={`/detail/${Autos.id}`}><FontAwesomeIcon icon={faMoneyBillAlt}/>Comprar</Link>
                </div>
            </div>
            
        </div>
            </div>
        </div>
    
        
    </main>
)
}

export default MainMap
