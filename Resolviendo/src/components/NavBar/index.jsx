import React from 'react'
import { Link } from 'react-router-dom'
import "./estilos.css"
const NavBar = () => {
return (
    <div>
        <header>
            <div className='contenedorNav'>
                <h2>Tienda</h2>
                <nav>
                    <ul>
                    <li><Link className='LinkNav' to="/">Inicio</Link></li>
                    <li><Link className='LinkNav' to='/Ofertas'>Ofertas</Link></li>
                    <li>Biblioteca</li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
)
}

export default NavBar