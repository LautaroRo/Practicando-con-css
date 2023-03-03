import React,{useState} from 'react'
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

    const Sumar = (product) =>{
        const isInCart = producstIncart(product.id)
        
        if(isInCart){

                let productoRep = products.find(element => element.id === product.id)
                productoRep.cantidad += 1
                productoRep.Precio += productoRep.PrecioSumado
                setProducts([...products])
        }
    }

    const Restar = (product) =>{
        const isInCart = producstIncart(product.id)
        
        if(isInCart){
                let productoRep = products.find(element => element.id === product.id)
                productoRep.cantidad -= 1
                productoRep.Precio -= productoRep.PrecioSumado
                if(productoRep.cantidad < 1){
                    productoRep.cantidad += 1 
                    productoRep.Precio += productoRep.PrecioSumado
                }
                setProducts([...products])
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

    const ElminarTodo = () =>{
        setProducts([])
    }

    const CountCart2 = () =>{
        let CantidadTotal = 0

        for(const product of products){
            CantidadTotal += product.Precio
        }

        return CantidadTotal
    }




    const Eliminar = (id) =>{
        console.log(id, "chau")
        const updateCart = products.filter(element => element.id !== id)
        setProducts(updateCart)
    }

    return (
        <Shop.Provider value = {{products, addProduct, CountCart,Eliminar,ElminarTodo,CountCart2,Sumar,Restar}}>
            {children}
        </Shop.Provider>
)
}

export default ShopProvider