import React, { useContext, useEffect, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import { Shop } from '../../Context/ShopProvider'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2"


const BibliotecaMap = ({Autos}) => {
    const {Eliminar, ElminarTodo} = useContext(Shop)

    const [Close, setClose] = useState(false)

    const [Value, setValue] = useState({})


    const Subir = e =>{
        e.preventDefault()

        let target = e.target

        let Nombre = target.nombre.value
        let Email = target.email.value
        let Numero = target.numero.value
        let Monto = target.monto.value


        let Articulo = {
            Nombre,
            Email,
            Numero,
            Monto
        }
        setValue(Articulo)

        if(Articulo.Monto < Autos.Precio || Articulo.Numero.length < 9){
            toast.error('El monto no es suficiente, Porfavor ingrese uno que supere a la cantidad requerida o el numero ingresado no existe', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
            Eliminar(Autos.id)
            console.log("se subio")
            Swal.fire({
                title:"Compra Finalizada",
                text:`Muchas gracias por comprar.Que disfrute su compra`,
                icon:"success",
                background:"black",
                color:"white"
            })
        }

    }


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
                        <form onSubmit={Subir} className='Formulario'>
                            <div className='XPosicion'>
                                <div className='h1FormularioPosicionamiento'>
                                    <h1 className='h1Formulario'>Formulario</h1>
                                </div>
                                <div className='XPosicion12'>
                                    <button onClick={BtonFalse} className='Xbton'><FontAwesomeIcon className='X' icon={faX}></FontAwesomeIcon></button>
                                </div>
                            </div>
    

                            <div className='DivInputsForm'>
                                <div className='Inputs1'>
                                <h2>Datos Personales</h2>
                                    <input className='Input' placeholder='Ingrese el nombre y apellido' type="text" name='nombre' required></input>
                                    <input className='Input' placeholder='Ingrese el gmail' type="email" name='email' required></input>
                                </div>
        
                                <div className='Inputs2'>
                                <h2>Datos Financieros</h2>
                                    <input className='Input' type="number" placeholder='Ingrese su Numero de tarjeta' name='numero' required minLength="9"/>

                                    <input className='Input' type="number" placeholder='Ingrese el Monto que desea trasnferir' name="monto" required/>
                                </div>
                            </div>
                            <button className='btonComprar' type='submit'>Total {Autos.Precio}$</button>
                        </form>
                    </div>
                </div>
                
                :
                null
            }
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
                <button className='BtonComprarBibl' onClick={BtonTrue}> Comprar</button>
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