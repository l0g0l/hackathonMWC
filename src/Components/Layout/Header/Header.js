import React from 'react';
import arrowleft from '../../../images/icons/arrowleft.png';

import '../../../common.scss'
import './header.scss'

const Header = () => {
    return (
        <>
        <div className="containerheader">
            
            <div className="containerheader-back">
                <img src={arrowleft} alt="arrowleft" />
                <p className="textfieldhome-text-5">Volver</p>
            </div>

            <div className="containerheader-step">
                <p className="textfieldhome-text-4">paso 01/03</p>
                <p className="textfieldhome-text-5">Personal Info.</p>

            </div> 
            
        </div>
            
        </>
    )
}

export default Header
