import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCableCar, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Shop } from '../../Context/ShopProvider'
const NavBar = () => {

    const {CountCart} = useContext(Shop)

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
            <Link className='BotonCarrito' to="/Biblioteca"><FontAwesomeIcon className='iconCar' icon={faCartShopping}></FontAwesomeIcon></Link>
        </div>
    </div>
)
}

export default NavBar