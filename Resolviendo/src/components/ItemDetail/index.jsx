import React, { useContext, useEffect, useState } from 'react'
import "./estilos.css"
import { Shop } from "../../Context/ShopProvider";
import { json, Link } from 'react-router-dom'
import { GuardarLocal } from '../Helper';


const ItemDetail = ({detail}) => {
    
    const {addProduct,Sumar,Restar,seguirPeliculas} = useContext(Shop)

    const [Cantidad, setCantidad] = useState(1)
    const [Close, setClose] = useState(false)

    
    useEffect(()=>{
        seguirPeliculas()
    },[])
    const AgregarProducto = () =>{
        setCantidad(Cantidad)
        setClose(true)
    }



    const Agregar = () =>{
        addProduct({...detail, cantidad:Cantidad})
        Sumar({...detail,cantidad:Cantidad})
        Restar({...detail,cantidad:Cantidad})
    }

    
    return (
    <div>
        <div className='FondoDetail'>
            <a className='LinkVer' href='#detail'>Ver Producto</a>
        </div>
    <div className="detailFlex">
    <div className='ContenedorDetail' id="detail">
        <div className='TextosDetail'>
            <h1 className='h1Detail'>{detail.Modelo}</h1>
            <p>{detail.Descripcion}</p>
            <button className="BtonDetailComprar" onClick={AgregarProducto}>Agregar a biblitoeca</button>
    {
        Close === true
        ?
        <div className='divButonsSiOno'>
            <Link to="/Biblioteca" className="BtonDetail1" onClick={Agregar}>
                Confirmar
            </Link>
            <Link to="/" className="BtonDetail2">
                volver    
            </Link>
        </div>
        :
        null
    }
        </div>
            <div className='FotoDetail'>
                <img className='imgDetail' src={detail.Img} alt="7" />
            </div>
            </div>
        </div>
    </div>


)
}

export default ItemDetail