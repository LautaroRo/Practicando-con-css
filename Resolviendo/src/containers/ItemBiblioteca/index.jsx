import React, { useContext, useEffect } from 'react'
import { Shop } from '../../Context/ShopProvider'
import "./estilos.css"
import BibliotecaMap from '../../components/BibliotecaMap' 
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const ItemBiblioteca = () => {

    const {Autos,seguirPeliculas} = useContext(Shop)

    useEffect(()=>{
        seguirPeliculas()
    },[])
    console.log(Autos)

    return (
    <div>
        
        <div className='InicioBiblioteca'>
                <a href="#Biblioteca" className='btonInicioBiblitoeca'>Ver Biblioteca</a>
        </div>
        <ToastContainer/>
        <div className='divAn'>
            <h2 className='h1Inicio'>Carrito</h2>
        </div>
        {

    Autos.length === 0
        ?
        <div className='DivNohay'>
            <h1>No tienes productos en el carrito.</h1>
            <Link to="/" className='LinkVolverNo'>Volver</Link>
        </div>
        :
        <div>
            
            {Autos.map((Autos)=>{
                return <BibliotecaMap Autos={Autos} key={Autos.id}/>
            })}
        </div>
}
    </div>
    )
}

export default ItemBiblioteca





