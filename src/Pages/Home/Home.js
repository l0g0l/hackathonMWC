import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import user from '../../images/icons/user.png';
import polygon from '../../images/icons/Polygon 3-1.png';
import arrow from '../../images/icons/arrow.png';
import polygon2 from '../../images/icons/Polygon 3.png';
import briefcase from '../../images/icons/briefcase.png';






import'../../common.scss';
import './home.scss';

const Home = () => {
    let history = useHistory();
    const sendSignUp = () => {
        history.push("/signup");
    }
    let history2 = useHistory();
    const sendSignUp2 = () => {
        history2.push("/signup");
    }
    
    return (
        <>
            
            <div className="containertotal">
                <div className="txthomeheader">
                    <h3 className="txt-home">Ya tienes cuenta?<span className="txt-link"><Link to="./signup"> Inicia sesión</Link></span></h3>
                </div>
                <div className="textfieldhome-text">
                    <p className="textfieldhome-text-1">¡Únete a la comunidad!</p>
                    <p className="textfieldhome-text-2">Para empezar, dinos que cuenta te gustaría abrir.</p>
                    </div>

                <div className="textfieldhome" onClick={sendSignUp}>
                    <div className="textfieldhome-btns">

                        <div className="iconsbutton">
                            <img className="iconsbutton-img1" src={user} alt="user" />
                            <img className="iconsbutton-img2" src={polygon} alt="polygon" />
                        </div>

                        <div >
                            <p className="textfieldhome-text-3">Developers</p>
                            <p className="textfieldhome-text-4">Cuenta personas para entrar en el mundo Dev</p>

                        </div>
                        
                        <div className="textfieldhome-icon">
                            <img src={arrow} alt="arrow" width='3%'/>
                        </div>
                    </div>
                </div>

                <div className="textfieldhome" onClick={sendSignUp2}>
                    <div className="textfieldhome-btns">

                        <div className="iconsbutton">
                            <img className="iconsbutton-img1" src={briefcase} alt="briefcase" />
                            <img className="iconsbutton-img2" src={polygon2} alt="polygon" />
                        </div>

                        <div >
                            <p className="textfieldhome-text-3">Business</p>
                            <p className="textfieldhome-text-4">Tienes o perteneces a una compañía</p>

                        </div>
                        
                        <div className="textfieldhome-icon2">
                            <img src={arrow} alt="arrow" width='3%'/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
