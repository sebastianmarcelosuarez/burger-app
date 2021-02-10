import React from 'react';
import classes from './Input.module.css'



const input = (props) => {

    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props}></input>
            break;
        case ('textarea'):
            inputElement = <textarea  className={classes.InputElement} {...props} ></textarea>
            break;
        default:
            inputElement = <input  className={classes.InputElement} {...props}></input>;
    }
    return (
        <div  className={classes.Input}>
            <label  className={classes.Label}> {props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;