import React from 'react';

import './button.scss'

const Button = (props) => {
    return (
        <>
        
            <input type="submit" className="btn" value={props.txt} style={{background:props.background}}/>
        </>
    )
}

export default Button
