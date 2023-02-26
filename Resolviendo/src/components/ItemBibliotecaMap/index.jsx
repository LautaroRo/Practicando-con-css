import React, { useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
const ItemBibliotecaMap = ({AutoSeleccionado}) => {

  const [Close, setClose] = useState(false)

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
                        <button onClick={BtonFalse} className='Xbton'><FontAwesomeIcon className='X' icon={faX}>Comprar</FontAwesomeIcon></button>
                      </div>
                      <div className='DivInputsForm'>
                        <input className='Input' placeholder='Ingrese el nombre' type="text"></input>
                        <input className='Input' placeholder='Ingrese el gmail' type="email"></input>
                        <input className='Input' type="number" placeholder='Ingrese su Numero'/>
                        <input className='Input' type="number" placeholder='Ingrese el Monto' />
                      </div>
                    </form>
                  </div>
                </div>
                
                :
                null
              }
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