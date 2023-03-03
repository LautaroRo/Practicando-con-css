import React, { useContext} from 'react'
import "./estilos.css"
import { Shop } from "../../Context/ShopProvider"

const ItemCart = ({Producto}) => {

    const VerPrecio = Producto.Precio

    const {Eliminar, Sumar,Restar} = useContext(Shop)

    return (
    
        <form className='ContenedorCartDentro'>
        <div className='DivFotoCarrito'>
            <img className='FotoCarrito' src={Producto.Img} alt={Producto.id}></img>
        </div>
        
        <div className='Div2Cart'>
            <h3>{Producto.Modelo}</h3>
            <p>{VerPrecio}</p>  
            <p className='BotonQuitar' onClick={()=>Eliminar(Producto.id)}>Quitar</p>
        </div>
        <div className='Div3Cart'>
            <p className='BTonesCart' onClick={() => Sumar(Producto)}>+</p>
                <p>{Producto.cantidad}</p>
            <p className='BTonesCart' onClick={() => Restar(Producto)}>-</p>
        </div>
        </form>
    

    )
}

export default ItemCart

