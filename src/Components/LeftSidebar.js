import React from 'react';
import logo from '../Components/mainicons/twitter.svg'
import mail from '../Components/mainicons/mail.svg'
import user from '../Components/mainicons/user.svg'
import lists from '../Components/mainicons/notepad.svg'
import bookmark from '../Components/mainicons/bookmark.svg'
import more from '../Components/mainicons/more.png'
import birdhouse from '../Components/mainicons/bird-house.png'
import bell from '../Components/mainicons/bell.svg'
import iconhashtag from '../Components/mainicons/icon-hashtag-512.png'
import profile from '../Components/mainicons/profile.jpeg'
import downarrow from '../Components/mainicons/down-arrow.svg'
import twittertweet from '../Components/mainicons/twitter_tweet.png'
import './LeftSidebar.css'

function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <div className="left-sidebar-content">
               <div><img src = {logo} className="twitter-logo"/></div>
               <div  className="left-side-icon">
                   <img src={birdhouse} alt="home" className="left-side-bar-image" />
                   <h5 className="left-icon-text-home">Home</h5>
               </div>
               <div className="left-side-icon">
                   <img src= {iconhashtag} alt="explore" className="left-side-bar-image"/>
                   <h5 className="left-icon-text">Explore</h5>
               </div>
               <div className="left-side-icon">
                   <img src = {bell} alt="notification" className="left-side-bar-image"/>
                   <h5 className="left-icon-text">Notifications</h5>
               </div>
               <div className="left-side-icon">
                   <img src = {mail} alt="message" className="left-side-bar-image"/>
                   <h5 className="left-icon-text">Messages</h5>
               </div>
               <div className="left-side-icon">
                   <img src = {bookmark} alt="bookmarks" className="left-side-bar-image"/>
                   <h5 className="left-icon-text">Bookmarks</h5>
               </div>
               <div className="left-side-icon">
                   <img src = {lists} alt="lists" className="left-side-bar-image"/>
                   <h5 className="left-icon-text">Lists</h5>
               </div>
               <div className="left-side-icon">
                   <img src = {user} alt="user" className="left-side-bar-image"/>
                   <h5 className="left-icon-text">Profiles</h5>
               </div>
               <div className="left-side-icon">
                   <img src = {more} alt="more" className="left-side-bar-image"/>
                   <h5 className="left-icon-text">More</h5>
               </div>
               <div className="left-side-icon-tweet">
                   <img src = {twittertweet} alt="more" width="50px"/>
               </div>
               <button className="left-button">Tweet</button>
            </div>
            <div className="left-side-icon-bottom">
                <img src={profile} width="49px" className="sidebar-profile"/>
                <div className="sidebar-bottom-content">
                    <p className="sidebar-name">Tife</p>
                    <p className="sidebar-handle">@tife</p>
                </div>
                <img src={downarrow} width="5.5%" className="downarrow"/>
            </div>
        </div>
    )
}

export default LeftSidebar;
