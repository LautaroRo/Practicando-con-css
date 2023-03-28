import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../Context/ShopProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

import "./estilos.css"
const OfertasMap = ({ofertas}) => {

    const {addProduct,Sumar,Restar,seguirPeliculas} = useContext(Shop)
    const [Cantidad, setCantidad] = useState(1)
    const [Close, setClose] = useState(false)
    const [open, setOpen] = useState(false)
    const [StateTrue, setStateTrue] = useState(false)
    
    useEffect(()=>{
        seguirPeliculas()
    },[])

    const activar = () =>{
        setStateTrue(false)
        setOpen(true)
    }

    const Desactivar = () =>{
        setStateTrue(true)
        setOpen(false)
    }
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

    <main>
    <div className='Carousel' id="Ofertas">
        <div className='ContenedorCarousel'>
            <div className="card">
            <div  className='DivBtonCard'>
                {
                    StateTrue === true
                    ?
                    <button className='BtonCard' onClick={activar}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                    :
                    <button className='BtonCard' onClick={Desactivar} onDoubleClick={() => setStateTrue(false)}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                }
                    </div>
                <div className='dar FotoSombra'>
                    <img className='FotosIndex' src={ofertas.Img} alt="sdadasasd"></img>
                </div>
                <div className="dar Atras">  
                    <div className='divSteam'> 
                        <div className='VersionSteam'>
                            <h2 className='TituloAutos'>{ofertas.Modelo}</h2>
                            <p className='DescripcionIndex'>{ofertas.Descripcion}</p>
                            <div className='PrecioYboton'>
                                <div className='Precios'>
                                    <strike>{ofertas.Precio2}$</strike>
                                    <h4 className='PrecioDeOferta'>{ofertas.Precio} USD$</h4>
                                </div>

                                <div className='DivBotonOfertas'>
                                    <button to="/Biblioteca" className='botonOfertas' onClick={AgregarProducto}>Comprar</button>
                                </div>
                        </div>
                        <div className='posicionBotones'>
                                {
                                Close === true
                                    ?
                                <div className='divButonsSiOnoOfertas'>
                                    <Link to="/Biblioteca" className="BtonOfertas1" onClick={Agregar}>
                                        Confirmar
                                    </Link>
                                    <button className="BtonOfertas2" onClick={() => setClose(false)}>
                                        cancelar  
                                    </button>
                                </div>
                                    :
                                    null
                                }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    { 
    StateTrue === true
    ?
        <div className="MasInfo1">
                <h2>Informacion Adicional</h2>
                <p>Este auto pose un motor {ofertas.Motor} con {ofertas.Km} Kilometros de uso y es del año {ofertas.Año}. {ofertas.Caballos}</p>
        </div>
    :
        null
    }
{
    open === true
    ?
    <div className="MasInfo2">
        <h2>Informacion Adicional</h2>
        <p>Este auto pose un motor {ofertas.Motor} con {ofertas.Km} Kilometros de uso y es del año {ofertas.Año}. {ofertas.Caballos}</p>
    </div>
    :
    null
}
    </main>
    

    )
}

export default OfertasMap