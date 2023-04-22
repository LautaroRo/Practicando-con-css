import React, { useContext, useEffect, useRef, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyBillAlt, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import { Shop } from '../../Context/ShopProvider'


const MainMap = ({Autos}) => {
    const {addProduct,Sumar,Restar,seguirPeliculas} = useContext(Shop)
    const [StateTrue, setStateTrue] = useState(false)
    const [open, setOpen] = useState(false)
    const [Cantidad, setCantidad] = useState(1)
    const [Close, setClose] = useState(false)
    const {info2} = useRef()

    const activar = () =>{
        setStateTrue(false)
        setOpen(true)
    }

    const Desactivar = () =>{
        setStateTrue(true)
        setOpen(false)

        let {current : caja} = info2

        caja.classList.add("none")

        
    }

    
    const AgregarProducto = () =>{
        setCantidad(Cantidad)
        setClose(true)
    }


    const Agregar = () =>{
        addProduct({...Autos, cantidad:Cantidad})
        Sumar({...Autos,cantidad:Cantidad})
        Restar({...Autos,cantidad:Cantidad})
    }

    useEffect(()=>{
        seguirPeliculas()
    },[])

return (

    <main>
    <div className='Carousel' id="inicio">
        <div className='ContenedorCarousel'>
            <div className="card">
            <div  className='DivBtonCard'>
                {
                    StateTrue === true
                    ?
                    
                    <button className='BtonCardMinus' onClick={activar}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                    :
                    <button className='BtonCardPlus' onClick={Desactivar} ><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                }
                    </div>
                <div className='dar FotoSombra'>
                    <img className='FotosIndex' src={Autos.Img} alt="sdadasasd"></img>
                </div>
                <div className="dar Atras">  
                    <div className='divSteam'> 
                        <div className='VersionSteam'>
                            <h2 className='TituloAutos'>{Autos.Modelo}</h2>
                            <p className='DescripcionIndex'>{Autos.Descripcion}</p>
                            <div className='PrecioYboton1'>
                                    <h4 className='PrecioIndex'>{Autos.Precio}$</h4>
                                    <button className="LinkMap" onClick={AgregarProducto}>Comprar</button>
                            </div>
                            <div className='posicionBotones'>
                                {
                                Close === true
                                    ?
                                <div className='divButonsSiOnoOfertasIndex'>
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
    { StateTrue === true
    ?
        <div className="MasInfo1">
                <h2>Informacion Adicional</h2>
                <p>Este auto pose un motor {Autos.Motor} con {Autos.Km} Kilometros de uso y es del año {Autos.Año}. {Autos.Caballos}</p>
        </div>
    :
    null
    }
    {
        open === true ?
        <div className="MasInfo2" id='MasInfo2' ref={info2}>
            <h2>Informacion Adicional</h2>
            <p>Este auto pose un motor {Autos.Motor} con {Autos.Km} Kilometros de uso y es del año {Autos.Año}. {Autos.Caballos}</p>
        </div>
        :
        null
    }

    </main>
)
}

export default MainMap
