import React from 'react';
import './FormInput.css'
import search from '../../Components/mainicons/search-icon.png'

function FormInput(props) {
    return (
        <div>
            <img src={search} width="30px" className="search"/>
            <input type={props.type} placeholder={props.placeholder} className="form"/>
        </div>
    )
}

export default FormInput;
