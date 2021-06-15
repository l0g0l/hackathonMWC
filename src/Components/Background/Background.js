import React from 'react';
import quotes from '../../images/icons/quotes.png';
import vector from '../../images/icons/vector.png'


import './background.scss';

const Background = () => {
    return (
        <div className="textContainer">
            <img className="quotesIcon" src={quotes} alt="icono comillas"/>
            <p className="textFront">
                Nuwe es la plataforma que convierte el desarrollo profesional, la búsqueda de trabajo y
                las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que
                te gusta, programar, diseñar, crear, planear...
            </p>
            <img className="vectorIcon" src={vector} alt="icono vector"/>
        </div>
    )
}

export default Background
