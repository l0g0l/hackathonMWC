import React from 'react';
import Button from '../Button/Button';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';



import './form2.scss'


const Input = (props) => {

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
        sendVerify()
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


                <div>
                    <Button txt={props.buttontxt} onClick={props.func} />
                </div>

            </form>
            <div className="textfieldhome-text-6">
                <p>Tu información es segura</p>
                <div></div>
            </div>
        </>
    )
}

export default Input
