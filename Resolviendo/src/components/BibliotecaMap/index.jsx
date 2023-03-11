import React, { useContext, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import { Shop } from '../../Context/ShopProvider'

const BibliotecaMap = ({Autos}) => {
    const {Eliminar, ElminarTodo} = useContext(Shop)

    const [Close, setClose] = useState(false)

    console.log(Autos,"hola")

  //const precioFinal = Autos.Precio * Autos.cantidad


    const BtonTrue = () =>{
    setClose(true)
    }

    const BtonFalse = () =>{
    setClose(false)
    }
    return (
    <div>
            {
                Close === true
                ?
                <div className='BackgroundForm'>
                    <div className='ContenedorForm'>
                        <form className='Formulario'>
                        <div className='XPosicion'>
                            <div className='h1FormularioPosicionamiento'>
                                <h1 className='h1Formulario'>Formulario</h1>
                        </div>
                        <div className='XPosicion12'>
                            <button onClick={BtonFalse} className='Xbton'><FontAwesomeIcon className='X' icon={faX}></FontAwesomeIcon></button>
                        </div>
                    </div>
                        <p>Complete este formulario para poder finalizar o cancelar la compra</p>
                        <div className='DivInputsForm'>
                            <div className='Inputs1'>
                                <input className='Input' placeholder='Ingrese el nombre' type="text"></input>
                            </div>
                            <div className='Inputs1'>
                                <input className='Input' placeholder='Ingrese el gmail' type="email"></input>
                        </div>
                    </div>

                    <div className='DivInputsForm'>
                        <div className='Inputs2'>
                            <input className='Input' type="number" placeholder='Ingrese su Numero'/>
                        </div>
                        <div className='Inputs2'>
                            <input className='Input' type="number" placeholder='Ingrese el Monto' />
                        </div>
                    </div>
                    <h3>{Autos.cantidad}</h3>
                    <h3>{Autos.Precio}</h3>
                    <button onClick={() => Eliminar(Autos.id)}>Eliminar</button>
                    </form>
                </div>
                </div>
                :
                null
            }
    <button onClick={ElminarTodo}>Limpiar</button>
    <div className='ContenedorBibloteca'>
        <div className='gridBibloteca'>
        <div className='DivImgBiblioteca'>
            <img src={Autos.Img} className="FotoBiblioteca" alt={Autos.id} />
        </div>
        <div className='ContenedorCaract'>
            <h1 className='TituloBiblioteca'>{Autos.Modelo}</h1>
            <p className='DescripcionBiblioteca'>{Autos.Descripcion}</p>
        <div className='SegundoContenedorCARACT'>
            <h2>Caracteristicas</h2>
            <div>
            <div className='DivCaractInterno'>
                <strong>Motor</strong>
                <p>{Autos.Motor}</p>
            </div>
            <div className="DivCaractInterno">
                <strong>Ciudad</strong>
                <p>{Autos.Ciudad}</p>
            </div>
            <div className="DivCaractInterno">
                <strong>Kilometros</strong>
                <p>{Autos.Km}</p>
            </div>
            <div className="DivCaractInterno">
                <strong>Año</strong>
                <p>{Autos.Año}</p>
            </div>


            <div className='DivBtonComprarBibl'>
                <button onClick={BtonTrue}> Comprar</button>
            </div>
            </div>
        </div>

        </div>
        </div>

      </div>

    </div>
  )

}

export default BibliotecaMap