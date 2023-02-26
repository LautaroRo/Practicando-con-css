import React, { useContext } from 'react'
import { Shop } from '../../Context/ShopProvider'
import "./estilos.css"
import ItemBibliotecaMap from '../../components/ItemBibliotecaMap'
const ItemBiblioteca = () => {
    const {products} = useContext(Shop)
    return (
    <div>
        <div className='InicioBiblioteca'>
                <a href="#Biblioteca" className='btonInicioBiblitoeca'>Ver Biblioteca</a>
        </div>    
        {

        products.length === 0
        ?
        <h1>noHay</h1>
        :
        <div className='DivContenedorCart' id="Biblioteca">
            {products.map((product)=>{
            return <ItemBibliotecaMap AutoSeleccionado={product} key={product.id}></ItemBibliotecaMap>
            })}
        </div>
        }
    </div>
    )
}

export default ItemBiblioteca