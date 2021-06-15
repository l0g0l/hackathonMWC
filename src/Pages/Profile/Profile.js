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
                <Header step={'02/03'} />
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Complete Your Profile'}/>
                        <Form  buttontxt={'Guardar y continuar'}/>

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