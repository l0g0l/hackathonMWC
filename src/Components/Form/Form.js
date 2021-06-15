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
    let history2 = useHistory();
    const sendVerify = () => {
        history2.push("/verifyprofile");
    }


    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (e) => {
        e.target.reset();
        sendProfile()
        sendVerify ()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="textfield">

                    <label htmlFor="">{props.inputext1}</label>
                    <input
                        type="text"
                        name="nombre"
                        className="textfield-input"
                        placeholder={props.placeh1}
                        {...register("nombre", { required: true })} />
                    {errors.nombre && props.error1}

                </div>
                <div className="textfield">

                    <label htmlFor="">{props.inputext2}</label>
                    <input
                        type="text"
                        name="correo"
                        className="textfield-input"
                        placeholder={props.placeh2}
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,

                        })} />
                    {errors.email && props.error2}

                </div>
                <div className="textfield" content="hidden">

                    <label htmlFor="">{props.inputext3}</label>
                    <input
                        type="password"
                        name="password"
                        className="textfield-input showpassword"
                        placeholder={props.placeh3}
                        id="myInput"
                        {...register("password", { required: true, 
                            pattern: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
                        })} />
                    {errors.password && props.error3}

                    <span onClick={myFunction}>Mostrar</span>
                </div>
                <div className="terms" content="hidden">
                    <input type="checkbox" name="check"
                        {...register("check", { required: true })} />
                    <p>Acepto los términos y condiciones</p>
                </div>

                <div>
                    <Button txt={props.buttontxt} onClick={props.func} />
                </div>

            </form>
        </>
    )
}

export default Input
