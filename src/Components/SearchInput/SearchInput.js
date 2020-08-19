import React from 'react';
import search from '../../Components/mainicons/search-icon.png'
import './SearchInput.css'

function SearchInput() {
    return (
        <div className="overall-s-input">
        <div className="s-input">
            <img src={search} width="30px" className="search-user"/>
            <input type="text" placeholder="Search Twitter" className="user-search-input"/>
        </div>
        </div>
    )
}

export default SearchInput;
