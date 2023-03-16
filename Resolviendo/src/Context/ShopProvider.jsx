import React,{useState} from 'react'
import { createContext } from "react";
import { GuardarLocal } from '../components/Helper';

export const Shop = createContext()


const ShopProvider = ({children}) => {

    const [Autos, setAutos] = useState([])

    const addProduct = (product) =>{
        const isInCart = producstIncart(product.id)
        if(isInCart){
            const productoRep = Autos.find(element => element.id === product.id)
            productoRep.cantidad += product.cantidad
            setAutos([...Autos])
            GuardarLocal("Autos", [...Autos])
        }else{
            setAutos([...Autos,product])
            GuardarLocal("Autos",[...Autos,product])
        }

        
    }

    const Sumar = (product) =>{
        const isInCart = producstIncart(product.id)
        
        if(isInCart){

                let productoRep = Autos.find(element => element.id === product.id)
                productoRep.cantidad += 1
                productoRep.Precio += productoRep.PrecioSumado
                setAutos([...Autos])
                GuardarLocal("Autos",[...Autos])
        }
    }

    const Restar = (product) =>{
        const isInCart = producstIncart(product.id)
        
        if(isInCart){
                let productoRep = Autos.find(element => element.id === product.id)
                productoRep.cantidad -= 1
                productoRep.Precio -= productoRep.PrecioSumado
                if(productoRep.cantidad < 1){
                    productoRep.cantidad += 1 
                    productoRep.Precio += productoRep.PrecioSumado
        
                }
                setAutos([...Autos])
                GuardarLocal("Autos",[...Autos])
        }
    }

    const producstIncart = (id) =>{
        return Autos.some(element => element.id === id)
    }


    const CountCart = () =>{
        let CantidadTotal = 0

        for(const product of Autos){
            CantidadTotal += product.cantidad
        }
        return CantidadTotal
    }

    const CountCart2 = () =>{
        let CantidadTotal = 0

        for(const product of Autos){
            CantidadTotal += product.Precio
        }

        return CantidadTotal
    }

    const seguirPeliculas = () =>{

        let Autos = JSON.parse(localStorage.getItem("Autos"))
        setAutos(Autos)
        console.log(Autos,"hola")

        return Autos
    }


    const Eliminar = (id) =>{
        const AutosElim = seguirPeliculas()
        const updateCart = AutosElim.filter(element => element.id !== id)
        setAutos(updateCart)
        localStorage.setItem("Autos",JSON.stringify(updateCart))
    }

    return (
        <Shop.Provider value = {{Autos, addProduct, CountCart,CountCart2,Sumar,Restar,setAutos,seguirPeliculas,Eliminar}}>
            {children}
        </Shop.Provider>
)
}

export default ShopProvider