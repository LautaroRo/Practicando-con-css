import React from 'react'
import OfertasMap from "../OfertasMap"

const Ofertas = ({Descuentos}) => {
return (
    <div className='DivOfertasInicio'>
        {Descuentos.map((AutosOfertas)=>{
            return <OfertasMap ofertas={AutosOfertas} key={AutosOfertas.id}></OfertasMap>
        })}
    </div>
)
}

export default Ofertas