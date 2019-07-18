import React from 'react';
import './Button.css';

export default props => {
 
    const classes = `
                    button 
                    ${props.operation ? 'operation' : ''}
                    ${props.double ? 'double' : ''}
                    ${props.triple ? 'triple' : ''}
                `;
    return (
        <button 
            className={classes}
            onClick={e => props.click &&  props.click(props.label)}
        >
            {props.label}
        </button>
    );
}