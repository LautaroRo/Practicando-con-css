import React, { useContext, useEffect, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX, faPlus} from '@fortawesome/free-solid-svg-icons'
import { Shop } from '../../Context/ShopProvider'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2"


const BibliotecaMap = ({Autos}) => {
    const {Eliminar, ElminarTodo} = useContext(Shop)

    const [Close, setClose] = useState(false)
    const [open, setOpen] = useState(false)
    const [Value, setValue] = useState({})


    const Subir = e =>{
        e.preventDefault()

        let target = e.target

        let Nombre = target.nombre.value
        let Email = target.email.value
        let Numero = target.numero.value
        let Monto = target.monto.value
        let Telefono = target.telefono.value
        let Seguridad = target.seguridad.value


        let Articulo = {
            Nombre,
            Email,
            Numero,
            Monto,
            Telefono,
            Seguridad
        }
        setValue(Articulo)

        if(Articulo.Monto < Autos.Precio){
            toast.error('El monto no es suficiente, porfavor ingrese uno que supere a la cantidad requerida', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }

        else if(Articulo.Numero.length < 9){
            toast.error('La tarjeta ingresada no existe', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }

            else if(Articulo.Telefono.length < 9 || Articulo.Telefono.length > 11){
                toast.error('La telefono no existe, porfavor ingrese uno que exista', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                }
                
                else if(Articulo.Seguridad.length > 7 || Articulo.Seguridad.length <= 3){
                    toast.error('El codigo de seguridad ingresado no existe, porfavor ingrese uno que exista', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    }
        else{
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
    setOpen(false)
    }

    const BtonFalse = () =>{
    setClose(false)
    setOpen(true)
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
                                <h2 className='h2Inputs1'>Datos Personales</h2>
                                    <input className='Input' placeholder='Ingrese el nombre y apellido' type="text" name='nombre' required></input>
                                    <input className='Input' placeholder='Ingrese el gmail' type="email" name='email' required></input>
                                    <input className='Input' placeholder='Ingrese el numero de telefono' type="number" name='telefono' required ></input>
                                </div>
        
                                <div className='Inputs2'>
                                <h2 className='h2Inputs2'>Datos Financieros</h2>
                                    <input className='Input' type="number" placeholder='Ingrese su Numero de tarjeta' name='numero' required />
                                    <input className='Input' type="number" placeholder='Ingrese el Monto que desea trasnferir' name="monto" required/>
                                    <input className='Input' type="number" placeholder='Ingrese el codigo de seguridad' name="seguridad" required />
                                </div>
                            </div>
                            <div className="DivBtonComprar">
                                <button className='btonComprar' type='submit'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Total {Autos.Precio}$</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                :
                null
            }
            {
                open === true
                ?
                <div className='BackgroundForm1'>
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
                                    <input className='Input' placeholder='Ingrese el numero de telefono' type="number" name='telefono' required></input>
                            </div>
    
                            <div className='Inputs2'>
                            <h2>Datos Financieros</h2>
                            <input className='Input' type="number" placeholder='Ingrese su Numero de tarjeta' name='numero' required minLength="9"/>
                                    <input className='Input' type="number" placeholder='Ingrese el Monto que desea trasnferir' name="monto" required/>
                                    <input className='Input' type="number" placeholder='Ingrese el codigo de seguridad' name="seguridad" required/>
                            </div>
                        </div>
                        <div className="DivBtonComprar">
                            <button className='btonComprar' type='submit'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Total {Autos.Precio}$</button>
                        </div>
                    </form>
                </div>
            </div>
            :
            null
            }
    <div className='ContenedorBibloteca'>
        <div className='gridBibloteca' id="Biblioteca">
        <div className='DivImgBiblioteca'>
            <img src={Autos.Img} className="FotoBiblioteca" alt={Autos.id} />
        </div>
        <div className='ContenedorCaract'>
            <h1 className='TituloBiblioteca'>{Autos.Modelo} :</h1>
            <p className='DescripcionBiblioteca'>{Autos.Descripcion}</p>
        <div className='SegundoContenedorCARACT'>
            <h2 className='caracth2'>Caracteristicas :</h2>
            <div>
            <div className='DivCaractInterno'>
                <strong className='strong'>Motor :</strong>
                <p className='MotorBibl'>{Autos.Motor}</p>
            </div>
            <div className="DivCaractInterno">
                <strong className='strong'>Ciudad :</strong>
                <p>{Autos.Ciudad}</p>
            </div>
            <div className="DivCaractInterno">
                <strong  className='strong'>Kilometros :</strong>
                <p>{Autos.Km}</p>
            </div>
            <div className="DivCaractInterno">
                <strong  className='strong'>Año :</strong>
                <p>{Autos.Año}</p>
            </div>

            <div className='DivBtonComprarBibl'>
                <button className='BtonComprarBibl' onClick={BtonTrue}> 
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Comprar</button>
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