import React from 'react';
import Button from '../../Components/Button/Button';
import { useForm } from "react-hook-form";


import './input.scss'


const Input = () => {
    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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
               {errors.nombre?.type === 'required' && "Por favor introduce tu nombre completo"}


            </div>
            <div className="textfield">

                <label htmlFor="">Correo Electrónico *</label>
                <input 
                type="text" 
                name="correo" 
                className="textfield-input" 
                placeholder="Email"
                {...register("correo", { required: true }, {pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            })} />
                {errors.correo?.type === 'required' && "Por favor introduce un email válido"}

            </div>
            <div className="textfield">

                <label htmlFor="">Contraseña *</label>
                <input 
                type="password" 
                name="password"  
                className="textfield-input" 
                placeholder="Contraseña"
                {...register("password", { required: true }, {pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            })} />
                {errors.password?.type === 'required' && "Debe contener al menos 1 mayúscula, minúscula, número y carácter especial"}
 
                <span onClick={myFunction}>Mostrar</span>
            </div>
            <div className="terms">
                <input type="checkbox" name="check"
                {...register("check", { required: true })} />
                <p>Acepto los términos y condiciones</p>
            </div>

            <div>
                <Button txt={'Registrar cuenta'}/>
            </div>

            </form>
        </>
    )
}

export default Input
