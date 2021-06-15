import React from 'react';
import {useHistory } from 'react-router-dom';


import './button.scss'

const Button = (props) => {
    let history = useHistory();
    const sendProfile = () => {
        history.push("/profile");
    }
    return (
        <>
        
            <input type="submit" className="btn" value={props.txt} style={{background:props.background}} />
        </>
    )
}

export default Button
