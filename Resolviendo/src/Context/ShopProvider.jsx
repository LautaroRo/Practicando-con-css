import React, { useState } from 'react'
import { createContext } from "react";

export const Shop = createContext()


const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) =>{
        const isInCart = producstIncart(product.id)
        if(isInCart){
            const productoRep = products.find(element => element.id === product.id)
            productoRep.cantidad += product.cantidad
            setProducts([...products])
        }else{
            setProducts([...products,product])
        }

        
    }

    const producstIncart = (id) =>{
        return products.some(element => element.id === id)
    }

    const CountCart = () =>{
        let CantidadTotal = 0

        for(const product of products){
            CantidadTotal += product.cantidad
        }
        return CantidadTotal
    }

    return (
        <Shop.Provider value = {{products, addProduct, CountCart}}>
            {children}
        </Shop.Provider>
)
}

export default ShopProvider