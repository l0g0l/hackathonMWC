import React from 'react';
import Header from '../../Components/Layout/Header/Header';
import Title from '../../Components/Title/Title';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

import google from '../../images/icons/google.png'

import '../../common.scss';
import './signup.scss'


const SignUp = () => {
    return (
        <>


            <div className="Total">


                <Header />
                <div className="all2">
                    <div className="containerregister">
                        <div>
                            <Title />
                        </div>

                        <div>
                            <Input />
                        </div>
                        <div>

                        </div>

                    </div>
                    <p className="textO">o</p>

                    <div className="google">
                        <img src={google} alt="logo" />
                        <p>Regístrate con Google</p>


                    </div>


                </div>
            </div>

        </>
    )
}

export default SignUp
