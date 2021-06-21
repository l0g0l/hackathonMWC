import React from 'react';

import '../../common.scss';
import './title.scss';

const Title = (props) => {
    return (
        <>
            <div className="textfieldhome-text">
                <p className="textfieldhome-text-1">{props.txt}</p>
                <p className="textfieldhome-text-2">Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
            </div>

        </>
    )
}

export default Title
