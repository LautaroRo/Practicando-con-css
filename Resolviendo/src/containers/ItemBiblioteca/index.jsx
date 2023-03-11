import React, { useContext, useEffect } from 'react'
import { Shop } from '../../Context/ShopProvider'
import "./estilos.css"
import BibliotecaMap from '../../components/BibliotecaMap' 
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
        {

    Autos.length === 0
        ?
        <h1>noHay</h1>
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





