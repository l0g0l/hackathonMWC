import React from 'react';
import Header from '../../Components/Layout/Header/Header';
import Title from '../../Components/Title/Title';
import Form from '../../Components/Form/Form';

import google from '../../images/icons/google.png'

import '../../common.scss';
import './signup.scss'


const SignUp = () => {
    return (
        <>
            <div className="Total">
                <Header step={'01/03'} subtitle={'Personal Info.'} />
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Registra tu cuenta individual'}/>
                        <Form buttontxt={'Registrar cuenta'} func={'sendProfile'} inputext1={'Nombre Completo *'} inputext2={'Correo electrónico *'} inputext3={'Contraseña *'} placeh1={'Nombre Completo '} placeh2={'Correo electrónico'} placeh3={'Contraseña'} error1={"Por favor introduce tu nombre completo"}  error2={"Por favor introduce un email válido"}  error3={"Debe contener un mínimo de 8 dígitos de los cuales al menos 1 mayúscula, minúscula, número y carácter especial"}/>
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
