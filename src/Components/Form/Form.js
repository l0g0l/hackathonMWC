import React from 'react';
import Button from '../Button/Button';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';



import './form.scss'


const Input = (props) => {
    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    let history = useHistory();
    const sendProfile = () => {
        history.push("/profile");
    }


    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        sendProfile()
    }



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="textfield">

                    <label htmlFor="">Nombre Completo *</label>
                    <input
                        type="text"
                        name="nombre"
                        className="textfield-input"
                        placeholder="Nombre completo"
                        {...register("nombre", { required: true })} />
                    {errors.nombre && "Por favor introduce tu nombre completo"}

                </div>
                <div className="textfield">

                    <label htmlFor="">Correo Electrónico *</label>
                    <input
                        type="text"
                        name="correo"
                        className="textfield-input"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,

                        })} />
                    {errors.email && "Por favor introduce un email válido"}


                </div>
                <div className="textfield">

                    <label htmlFor="">Contraseña *</label>
                    <input
                        type="password"
                        name="password"
                        className="textfield-input showpassword"
                        placeholder="Contraseña"
                        id="myInput"
                        {...register("password", { required: true }, {
                            pattern: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
                        })} />
                    {errors.password && "Debe contener al menos 1 mayúscula, minúscula, número y carácter especial"}

                    <span onClick={myFunction}>Mostrar</span>
                </div>
                <div className="terms">
                    <input type="checkbox" name="check"
                        {...register("check", { required: true })} />
                    <p>Acepto los términos y condiciones</p>
                </div>

                <div>
                    <Button txt={props.buttontxt} onClick={sendProfile} />
                </div>

            </form>
        </>
    )
}

export default Input
