import React from 'react';
import Header from '../../Components/Layout/Header/Header';
import Title from '../../Components/Title/Title';
import Form from '../../Components/Form/Form';
import Modal  from '../../Components/Modal/Modal';


import '../../common.scss';
import './verifyprofile.scss'


const VerifyProfile = () => {
    const form_fields_definition = [{
        placeholder: "0000 0000 0000 0000",
        text: "Número de tarjeta",
        error_msg: "Por favor introduce un número válido",
        name: "credito",
        validationOptions: { required: true }
    },
    {
        placeholder: "CVC",
        text: "Código secreto *",
        error_msg: "",
        validationOptions: {
            required: false,
        },
        name: "cvc"
    }]

    return (
        <>
            <div className="Total">
                <Header step={'03/03'} subtitle={'Verificación por tarjeta'}/>
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Verifica tu perfil'}/>
                         <Form buttontxt={'Crear cuenta'} fieldsDefinition={form_fields_definition} />
                     <Modal />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default VerifyProfile
