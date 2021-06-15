import React from 'react';
import { Link } from 'react-router-dom';
import Stopwatch from '../../Components/Stopwatch/Stopwatch';
import Background from '../../Components/Background/Background'


import './home.scss'

const Home = () => {
    return (
        <div>

            <Stopwatch />
            <Background/>
            <div>
                <h3 className="txt-home">Ya tienes cuenta?<span className="txt-link"><Link to="./signup"> Inicia sesión</Link></span></h3>

            </div>



        </div>
    )
}

export default Home
