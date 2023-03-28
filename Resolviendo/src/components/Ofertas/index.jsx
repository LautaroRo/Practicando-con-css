import React from 'react'
import OfertasMap from "../OfertasMap"
import "./estilos.css"
const Ofertas = ({Descuentos}) => {
return (
    <div className='DivOfertasInicio'>
        
        <div className='IniciOfertas'>
            <a className='LinkVer' href='#Ofertas'>Ver Ofertas</a>
        </div>
        <div className='divAn'>
            <h2 className='h1Inicio'>Ofertas</h2>
        </div>
        {Descuentos.map((AutosOfertas)=>{
            return <OfertasMap ofertas={AutosOfertas} key={AutosOfertas.id}></OfertasMap>
        })}
    </div>
)
}

export default Ofertas