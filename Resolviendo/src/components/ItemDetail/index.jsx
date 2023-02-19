import React from 'react'
import "./estilos.css"

const ItemDetail = ({detail}) => {
    console.log(detail)
    return (
    <div>
        <div className='FondoDetail'>
            <a className='LinkVer' href='#detail'>Ver Producto</a>
        </div>
    <div className='ContenedorDetail' id="detail">
        <div className='TextosDetail'>
            <h1>{detail.Modelo}</h1>
            <p>{detail.Descripcion}</p>
            <button className="BtonDetailComprar">Comprar</button>
        </div>
        <div className='FotoDetail'>
            <img className='imgDetail' src={detail.Img} alt="7" />
        </div>
        <div className='DivBtonDetailComprar2'>
            <button className='BtonDetailComprar2'>Comprar</button>
        </div>
        
        
    </div>
    </div>
)
}

export default ItemDetail