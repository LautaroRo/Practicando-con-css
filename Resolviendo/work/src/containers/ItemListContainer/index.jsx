import React, { useEffect, useState } from 'react'
import { db } from "../../Firebase/config"
import { collection, getDocs } from "firebase/firestore"; 
import Main from "../../components/Main"
const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getProducts = async () =>{
            const querySnapshot = await getDocs(collection(db, "Autos"));
            const AutosFirebase = []
            querySnapshot.forEach((doc) => {
                const product = {
                    id: doc.id,
                    ...doc.data()
                }
                AutosFirebase.push(product)
                setProducts(AutosFirebase)
            });
    }
    getProducts();
    })

return (
    <div>
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