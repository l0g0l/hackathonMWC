import React from 'react';
import { useHistory } from 'react-router-dom';
import arrowleft from '../../../images/icons/arrowleft.png';


import '../../../common.scss'
import './header.scss'

const Header = (props) => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
      }
    return (
        <>
        <div className="containerheader">
            
            <div className="containerheader-back">
                <button onClick={goBack}><img src={arrowleft} alt="arrowleft" /></button>
                <p className="textfieldhome-text-5">Volver</p>
            </div>

            <div className="containerheader-step">
                <p className="textfieldhome-text-4">{props.step}</p>
                <p className="textfieldhome-text-5">{props.subtitle}</p>

            </div>
            
        </div>
            
        </>
    )
}

export default Header
