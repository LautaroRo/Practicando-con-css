import React, { useEffect, useState } from 'react'
import productos from "../../Autos/Autos.json"
import Main from "../../components/Main"
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCarRear} from '@fortawesome/free-solid-svg-icons'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const promesa = new Promise((acc) => {
            setTimeout(() => {
                acc(productos);
            }, 3000);
        });
    
        promesa
        .then(products => {
            setProducts(products)
        })
    })


return (
    <div>
        <div className='contenedorAutos'>
            <div className='contenedor'>
                <h2 className='tituloAutoPrinc'>Toyota Supra mk4</h2>
                <p className='DescripcionPrinc'> El Supra MkIV estrenó un diseño compuesto por curvas, en plena era del biodesign, y caracterizado por un imponente alerón trasero. El coche era más pequeño, más bajo y más ancho que el MkIII. Su motor de 6 cilindros en línea desarrollaba 220 CV, mientras que la variante biturbo entregaba 330 CV.</p>
                <button className='botonPric'><FontAwesomeIcon icon={faCarRear}></FontAwesomeIcon> Comprar</button>
            </div>
        </div>

        {
            Object.keys(products).length === 0
            ?
            <div className='loading'>
                <h1>Loading</h1>
            </div>
            : <Main greeting={products}></Main>     
        
        }
    </div>
)
}


export default ItemListContainer