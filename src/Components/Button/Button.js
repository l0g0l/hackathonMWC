import React from 'react';



import './button.scss'

const Button = (props) => {

    return (
        <>
         <input type="submit" className="btn" value={props.txt}  onClick={props.button_onclick}/>
        </>
    )
}

export default Button
