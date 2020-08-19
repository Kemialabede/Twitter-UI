import React from 'react';
import Button from '../Button/Button'
import second from '../../Components/mainicons/second-picture.jpeg'
import third from '../../Components/mainicons/third-image.jpeg'
import first from '../../Components/mainicons/first.jpg'
import './FollowContent.css'

function FollowContent(props) {
    return (
        <div className="content">
           <div className="follow-header">
                <h4>{props.name}</h4>
            </div> 
            <div className = "follow-content">
                <div className="second-image">
                    <img src={second} alt="image" />
                </div>
                <div className="inner-content">
                    <p className="follow-paragraph">Tickmill</p>
                    <p className="handle">@tickmill</p>
                </div>
                <div className="btn">
                    <Button text="Follow" color="follow-button"/>
                </div>
            </div>
            <div className = "follow-content">
            <div className="third-image">
                    <img src={third} alt="image" />
                </div>
                <div className="inner-content">
                    <p className="follow-paragraph">Adeyeni</p>
                    <p className="handle">@tifeadeyeni</p>
                </div>
                <div className="btn2">
                <Button text="Follow" color="follow-button"/>
                </div>
            </div>
            <div className = "follow-content">
            <div className="first-image">
                    <img src={first} alt="image" />
                </div>
                <div className="inner-content">
                    <p className="follow-paragraph">Funmi</p>
                    <p className="handle">@funmi</p>
                </div>
                <div className="btn3">
                <Button text="Follow" color="follow-button"/>
                </div>
            </div>
            <div className="follow-content">
                <a href="" className="trend-inner-link">Show more</a>
            </div>
        </div>
    )
}

export default FollowContent;
