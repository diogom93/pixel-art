import React from 'react';

export default props => {
    return <div className={`${props.background} pixel ${props.currentColour ? 'current-colour' : ''}`} onClick={props.setColour}/>
}