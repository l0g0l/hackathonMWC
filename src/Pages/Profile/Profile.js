import React from 'react';
import Header from '../../Components/Layout/Header/Header';
import Title from '../../Components/Title/Title';
import Form from '../../Components/Form/Form';


import '../../common.scss';
import './profile.scss'


const Profile = () => {
    const form_fields_definition = [{
        placeholder: "Teléfono",
        text: "Número de teléfono ",
        error_msg: "Por favor introduce un número de teléfono válido",
        name: "telefono",
        validationOptions: { required: false }
    },

    {
        placeholder: "Dirección completa",
        text: "Dirección",
        error_msg: "Por favor introduce una dirección completa",
        validationOptions: {
            required: false
        },
        name: "direccion"
    },
    {
        placeholder: "Selecciona uno",
        text: "País de residencia",
        error_msg: "",
        validationOptions: {
            required: false
        },
        name: "pais",
    }]
    return (
        <>
            <div className="Total">
                <Header step={'02/03'} subtitle={'Localización'} />
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Complete Your Profile'} />
                        <Form buttontxt={'Guardar y continuar'} destination={'/verifyprofile'} fieldsDefinition={form_fields_definition} />
                        <div className="textfieldhome-text-6">
                            <p>Tu información es segura</p>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile