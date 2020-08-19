import React from 'react';
import setting from '../../Components/mainicons/setting-image.png'
import arrow from '../../Components/mainicons/arrow-down.svg'
import './Trends.css'

function Trends() {
    return (
        <div className= "trends">
            <div className="trend-header">
                <h4>Trends for you</h4>
                <img src = {setting} alt="setting" className="setting"/>
            </div>
            <div className="trend-line"></div>
            <div  className="trend-content">
                <div className="trend-inner-content" >
                    <p className="trend-paragraph">Trending in Nigeria</p>
                    <p className="trend-inner-paragraph">#precious the scammer</p>
                </div>
                <img src = {arrow} alt="arrow" className="arrow"/>
            </div>
            <div className="trend-content">
                <div className="trend-inner-content">
                    <p className="trend-paragraph">hip pop and rap. Trending</p>
                    <p className="trend-inner-paragraph">wizkid</p>
                </div>
                <img src = {arrow} alt="arrow" className="arrow"/>
            </div>
            <div className="trend-content">
                <div className="trend-inner-content">
                    <p className="trend-paragraph">Pop. Trending</p>
                    <p className="trend-inner-paragraph">Beyonce</p>
                </div>
                <img src = {arrow} alt="arrow" className="arrow"/>
            </div>
            <div className="trend-content">
                <div className="trend-inner-content">
                    <p className="trend-paragraph">Pop. Trending</p>
                    <p className="trend-inner-paragraph">#BETAwards</p>
                </div>
                <img src = {arrow} alt="arrow" className="arrow"/>
            </div>
            <div className="trend-content">
                <div className="trend-inner-content">
                    <p className="trend-paragraph">Trending in Nigeria</p>
                    <p className="trend-inner-paragraph">#precious the scammer</p>
                </div>
                <img src = {arrow} alt="arrow" className="arrow"/>
            </div>
            <div className="trend-show">
                <a href="" className="trend-inner-link">Show more</a>
            </div>
        </div>
    )
}

export default Trends;
