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
                <Header step={'01/03'} />
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Registra tu cuenta individual'}/>
                        <Form buttontxt={'Registrar cuenta'}/>
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
