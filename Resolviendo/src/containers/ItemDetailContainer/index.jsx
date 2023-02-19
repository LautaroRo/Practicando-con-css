import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Auto from "../../Autos/Autos.json"
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {
    const [AutoSel, setAutoSelect] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        const getProducts = () => {

            const promesa = new Promise((acc,rej)=>{
                setTimeout(()=>{
                    acc(Auto)
                },2000)
            })
    
            promesa
            .then(response=>{
                console.log(response)
                const AutoFiltrado = response.find(elemente=> elemente.id.toString() === id)
                console.log(AutoFiltrado)
                setAutoSelect(AutoFiltrado)
            })
        }

        getProducts()
    },[id])

    return (
        <div>
        {
            Object.keys(AutoSel).length ?
            <ItemDetail detail={AutoSel}></ItemDetail>
            :
            null
        }
        </div>
)
}

export default ItemDetailContainer