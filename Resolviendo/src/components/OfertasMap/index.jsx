import React from 'react'

import "./estilos.css"
const OfertasMap = ({ofertas}) => {

    return (
    <div className='DivOfertasInicio'>
        <div className='IniciOfertas'>
        <a className='LinkVer' href='#Ofertas'>Ver Ofertas</a>
        </div>
        <div id="Ofertas" className='grid'>

            
            <div>
                <img className='fotoGrid' src={ofertas.Img} alt={ofertas.id}/>
            </div>
            
            <div className='ModeloDescripcion'>
                <h2 className='tituloOferta'>{ofertas.Modelo}</h2>
                <p className='descripcionOfertas'>{ofertas.Descripcion}</p>

                <div className='PreciosYboton'>
                    <div className='Precios'>
                        <strike>{ofertas.Precio1}$</strike>
                        <p className='PrecioDeOferta'>{ofertas.Precio2}$</p>
                    </div>
                    <div className='DivBotonOfertas'>
                        <button className='botonOfertas2'>Info</button>
                        <button className='botonOfertas'>comprar</button>
                    </div>
                    
                </div>
            </div>
            



        </div>
        <br />
        <br />
    </div>
    )
}

export default OfertasMap