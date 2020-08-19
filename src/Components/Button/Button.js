import React from 'react';
import './Button.css';

function Button(props) {
    let classtyle;
    switch (props.color) {
        case "follow-button":
            classtyle ="follow-button"
            break;
        case "follow-button-two":
            classtyle = "follow-button follow-button-two"
            break;
            default:
    }
    let classbutton;
    switch (props.pad) {
        case "pad-content":
            classbutton = "pad-content"
            break;
            default:
    }
    return (
        <div className={classbutton}>
            <button className= {classtyle}>
                {props.text}
            </button>
        </div>
    )
}

export default Button;


