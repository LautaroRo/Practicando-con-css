import React, { useContext, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCableCar, faCartShopping,faX, faTrash} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Shop } from '../../Context/ShopProvider'
import ItemCart from "../ItemCart"

const NavBar = () => {

    const {CountCart , Autos} = useContext(Shop)
    

    const [Close, setClose] = useState(false)
    const [Open, setOpen] = useState(false)


    const Activar = () =>{
        setClose(true)
        setOpen(false)
    }



    const Desactivar = () =>{
        setClose(false)
        setOpen(true)
    }
return (
    <div>
        <header>
            <nav>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className='checkbtn'>
                    <FontAwesomeIcon icon={faCableCar}></FontAwesomeIcon>
                </label>
                <div className='H1NavBar'>
                    <h1 className='h1'>Tienda</h1>
                </div>
                
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "activado" : 'Link'}>Inicio</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Ofertas" className={({isActive}) => isActive ? "activado" : 'Link'}>Ofertas</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Biblioteca" className={({isActive}) => isActive ? "activado" : 'Link'}>Biblioteca</NavLink>
                    </li>
                </ul>
            </nav>
            
        </header>

        <div className='posicionBotonwsp'>
            <Link className='botonwsp'><FontAwesomeIcon className='iconowsp'icon={faWhatsapp}/></Link>
        </div>
        
        <div className='posicionBotonCarr'>
                <span className='Span'>{CountCart()}</span>
                <button onClick={Activar} className='BotonCarrito'><FontAwesomeIcon className='iconCar' icon={faCartShopping}></FontAwesomeIcon></button>
        {
            Close === false
            ?
            null
            :
            <div className="ContenedorPrincipalCart">
                <div className='ContenedorCart'>
                    <div className='PosicionBotonSkip'>
                        <button className='BtonExitCart' 
                        onClick={Desactivar}><FontAwesomeIcon className='XCart' icon={faX}></FontAwesomeIcon></button>
                    </div>
                    <h1 className='CarritoH1'>Carrito:</h1>
                        {
                        Autos.length===0
                        ?
                        <div className='DivNohayCart'>
                            <h2 className='h1Volver'>No tienes productos en el carrito.</h2>
                                <Link to="/" className='LinkVolverNoCart' onClick={() => setClose(true)}>Volver</Link>
                        </div>
                        :
                        Autos.map((product)=>{
                                return <ItemCart Producto={product} key={product.id}></ItemCart>
                        })}
                    <div/>

                </div>
            </div>

        }
        {
            Open === true
            ?
            <div className="ContenedorPrincipalCart1">
            <div className='ContenedorCart1'>
                <div className='PosicionBotonSkip'>
                    <button className="BtonExitCart"onClick={Desactivar}><FontAwesomeIcon className='XCart' icon={faX}></FontAwesomeIcon></button>
                </div>
                <h1 className='CarritoH1'>Carrito:</h1>
                    {
                    Autos.length===0
                    ?
                    <div className='DivNohayCart'>
                        <h2 className='h1Volver'>No tienes productos en el carrito.</h2>
                            <Link to="/" className='LinkVolverNoCart'>Volver</Link>
                    </div>
                    :
                    Autos.map((product)=>{
                            return <ItemCart Producto={product} key={product.id}></ItemCart>
                    })}
                <div/>

            </div>
        </div>
        :
        null
        }
        </div>


    </div>
)
}

export default NavBar