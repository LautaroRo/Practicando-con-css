import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../Context/ShopProvider'

import "./estilos.css"
const OfertasMap = ({ofertas}) => {

    const {addProduct,Sumar,Restar,seguirPeliculas} = useContext(Shop)
    const [Cantidad, setCantidad] = useState(1)
    const [Close, setClose] = useState(false)
    
    useEffect(()=>{
        seguirPeliculas()
    },[])

    const AgregarProducto = () =>{
        setCantidad(Cantidad)
        setClose(true)
    }


    const Agregar = () =>{
        addProduct({...ofertas, cantidad:Cantidad})
        Sumar({...ofertas,cantidad:Cantidad})
        Restar({...ofertas,cantidad:Cantidad})
    }

    
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
                        <strike>{ofertas.Precio2}$</strike>
                        <p className='PrecioDeOferta'>{ofertas.Precio}$</p>
                    </div>
                    <div className='DivBotonOfertas'>
                        <button to="/Biblioteca" className='botonOfertas' onClick={AgregarProducto}>Comprar</button>
                    </div>
                </div>
                {
                        Close === true
                        ?
                        <div className='divButonsSiOnoOfertas'>
                            <Link to="/Biblioteca" className="BtonOfertas1" onClick={Agregar}>
                                Confirmar
                            </Link>
                            <Link to="/" className="BtonOfertas2">
                                volver    
                            </Link>
                        </div>
                        :
                        null
            }
            </div>
        </div>
        <br />
        <br />
    </div>
    )
}

export default OfertasMap