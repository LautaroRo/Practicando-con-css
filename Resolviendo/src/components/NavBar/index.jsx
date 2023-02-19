import React from 'react'
import { Link } from 'react-router-dom'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCableCar} from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
return (
    <div>
        <header>
            <nav>
                <input type="checkbox" id="check"/>
                <label For="check" className='checkbtn'>
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
    </div>
)
}

export default NavBar