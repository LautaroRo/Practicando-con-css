import React, { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCableCar, faCartShopping,faX} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Shop } from '../../Context/ShopProvider'
import ItemCart from "../ItemCart"

const NavBar = () => {

    const {CountCart,CountCart2 , Autos} = useContext(Shop)
    

    const [Close, setClose] = useState(false)


    const Activar = () =>{
        setClose(true)
    }


    const Desactivar = () =>{
        setClose(false)
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
                        <Link to="/" className='Link'>Inicio</Link>
                    </li>

                    <li>
                        <Link to="/Ofertas" className='Link'>Ofertas</Link>
                    </li>

                    <li>
                        <Link to="/Biblioteca" className='Link'>Biblioteca</Link>
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
                    <h1>Carrito:</h1>
                    <p>{CountCart2()}</p>
                    
                        {Autos.map((product)=>{
                                return <ItemCart Producto={product} key={product.id}></ItemCart>
                        })}
                    <div/>

                </div>
            </div>

        }
        </div>


    </div>
)
}

export default NavBar