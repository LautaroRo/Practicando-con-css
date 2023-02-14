import React, { useEffect, useState } from 'react'
import ofertas from "../../Autos/Ofertas.json"
import Ofertas from "../../components/Ofertas"
import "./estilos.css"
const ItemOfertas = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const promesa = new Promise((acc)=>{
            setTimeout(()=>{
                acc(ofertas)
            },1000)
        })

        promesa
        .then(acc=>{
            setProducts(acc)
        })

    })
    console.log(products)

    return (
        <div className='bodyOfertas'>

            {
            Object.keys(products).length === 0
            ?
            <div className='loading'>
                <h1>Loading</h1>
            </div>
            : <Ofertas Descuentos={products}></Ofertas>

        }
        </div>
    )
}

export default ItemOfertas