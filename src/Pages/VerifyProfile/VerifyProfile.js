import React from 'react';
import Header from '../../Components/Layout/Header/Header';
import Title from '../../Components/Title/Title';
import Form from '../../Components/Form/Form';



import '../../common.scss';
import './verifyprofile.scss'

const VerifyProfile = () => {

    return (
        <>
            <div className="Total">
                <Header step={'03/03'} subtitle={'Verificación por tarjeta'}/>
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Verifica tu perfil'}/>
                        <Form buttontxt={'Crear cuenta'} func={'sendProfile'} inputext1={'Número de Tarjeta'} inputext2={'Código secreto'} placeh1={'0000 0000 0000 0000'} placeh2={'CVC'} error1={"DEbes introducir un número de tarjeta válido"}  error2={""}   />
                     

                     
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default VerifyProfile
