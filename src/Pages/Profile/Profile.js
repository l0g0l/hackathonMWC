import React from 'react';
import Header from '../../Components/Layout/Header/Header';
import Title from '../../Components/Title/Title';
import Form from '../../Components/Form/Form';


import '../../common.scss';
import './profile.scss'


const Profile = () => {
    return (
        <>
            <div className="Total">
                <Header step={'02/03'} subtitle={'Localización'} />
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Complete Your Profile'}/>
                        <Form  buttontxt={'Guardar y continuar'} func={'sendVerify'} inputext1={'Número de teléfono'} inputext2={'Dirección'} inputext3={'País de residencia'} placeh1={'Teléfono'} placeh2={'Dirección completa'} placeh3={'Selecciona uno'}  error1={"Comprueba que el teléfoo es correcto"}  error2={"Introduce la dirección completa"}  error3={""}/>

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