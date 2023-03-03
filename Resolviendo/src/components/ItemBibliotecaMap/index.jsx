import React, { useContext, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import { Shop } from '../../Context/ShopProvider'
const ItemBibliotecaMap = ({AutoSeleccionado}) => {

  const {Eliminar, ElminarTodo} = useContext(Shop)

  const [Close, setClose] = useState(false)

  console.log(AutoSeleccionado.id,"hola")

  const precioFinal = AutoSeleccionado.Precio * AutoSeleccionado.cantidad

  console.log(precioFinal)

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
                      <h3>{AutoSeleccionado.cantidad}</h3>
                      <h3>{AutoSeleccionado.Precio}</h3>
                      <button onClick={() => Eliminar(AutoSeleccionado.id)}>Eliminar</button>
                    </form>
                  </div>
                </div>
                :
                null
              }
      <button onClick={ElminarTodo}>Limpiar</button>
      <div className='ContenedorBibloteca'>
        <div className='gridBibloteca'>
          <div>
            <img src={AutoSeleccionado.Img} className="FotoBiblioteca" alt={AutoSeleccionado.id} />
          </div>
          <div className='ContenedorCaract'>
            <h1 className='TituloBiblioteca'>{AutoSeleccionado.Modelo}</h1>
            <p className='DescripcionBiblioteca'>{AutoSeleccionado.Descripcion}</p>
          <div className='SegundoContenedorCARACT'>
            <h2>Caracteristicas</h2>
            <div>
              <div className='DivCaractInterno'>
                <strong>Motor</strong>
                <p>{AutoSeleccionado.Motor}</p>
              </div>
              <div className="DivCaractInterno">
                <strong>Ciudad</strong>
                <p>{AutoSeleccionado.Ciudad}</p>
              </div>
              <div className="DivCaractInterno">
                <strong>Kilometros</strong>
                <p>{AutoSeleccionado.Km}</p>
              </div>
              <div className="DivCaractInterno">
                <strong>Año</strong>
                <p>{AutoSeleccionado.Año}</p>
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

export default ItemBibliotecaMap