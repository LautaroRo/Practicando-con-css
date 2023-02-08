import React from 'react'
import MainMap from '../MainMap'

const Main = ({greeting}) => {
    return (
    <div>
        {greeting.map((product)=>{
            return <MainMap Autos={product} key={product.id}></MainMap>
        })}
    </div>
)
}

export default Main