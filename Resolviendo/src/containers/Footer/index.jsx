import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
return (
    <footer className='footer' >
        <div className="redescontainer">
                <li className='liFooter'><a className='aFooter' href="https://es-la.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://twitter.com/home?lang=es" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li>
        </div>
    </footer>
)
}

export default Footer