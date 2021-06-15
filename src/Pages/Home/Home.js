import React from 'react';
import { Link } from 'react-router-dom';
import Stopwatch from '../../Components/Stopwatch/Stopwatch';


import './home.scss'

const Home = () => {
    return (
        <>
            <Stopwatch />

        <div className="container total">
        <div className="txt">
                <h3 className="txt-home">Ya tienes cuenta?<span className="txt-link"><Link to="./signup"> Inicia sesión</Link></span></h3>

            </div>

            <div>



            </div>
        </div>

        




        </>
    )
}

export default Home
