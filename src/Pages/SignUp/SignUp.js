import React from 'react';
import Header from '../../Components/Layout/Header/Header';
import Title from '../../Components/Title/Title';
import Form from '../../Components/Form/Form';

import google from '../../images/icons/google.png'

import '../../common.scss';
import './signup.scss'


const SignUp = () => {
        // Con este objeto Json  creo los inputs que vaya a necesitar en cada vista dinámicamente en el componente form, paśandole las propiedades por props

    const form_fields_definition = [{
        placeholder: "Nombre Completo",
        text: "Nombre Completo *",
        error_msg: "Por favor introduce tu nombre completo",
        name: "nombre",
        validationOptions: { required: true }
    },
    {
        placeholder: "Correo electrónico",
        text: "Correo electrónico *",
        error_msg: "Por favor introduce un email válido",
        validationOptions: {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        },
        name: "email"
    },
    {
        placeholder: "Contraseña",
        text: "Contraseña *",
        error_msg: "Debe contener un mínimo de 8 dígitos de los cuales al menos 1 mayúscula, minúscula, número y carácter especial",
        validationOptions: {
            required: true,
            pattern: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
        },
        name: "password",
        showmostrar: true,
        type: "password",
        id: "myInput"

    },
    {
        placeholder: "",
        text: "",
        error_msg: "Debes aceptar las condiciones",
        validationOptions: {
            required: true,
        },
        name: "check",
        type: "checkbox",
        div_className: "terms",
        showaceptar: true

    }]
    return (
        <>
            <div className="Total">
                <Header step={'01/03'} subtitle={'Personal Info.'} />
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Registra tu cuenta individual'} />

                        <Form buttontxt={'Registrar cuenta'} fieldsDefinition={form_fields_definition} destination={'/profile'} />
                        <p className="textO">o</p>

                        <div className="google">
                            <img src={google} alt="logo" />
                            <p>Regístrate con Google</p>
                            <div></div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SignUp
