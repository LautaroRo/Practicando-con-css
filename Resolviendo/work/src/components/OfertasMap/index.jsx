import React from 'react'
import "./estilos.css"
const OfertasMap = ({ofertas}) => {
    return (
        <div>
            <img src={ofertas.Img}></img>
            <strike>{ofertas.Precio1}</strike>
            <p>{ofertas.Precio2}</p>
        </div>
    )
}

export default OfertasMap