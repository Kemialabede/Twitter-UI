import React from 'react';
import './Profile.css'
import LeftSidebar from '../../Components/LeftSidebar';
import Background from '../../Components/mainicons/background.jpg'
import profile from '../../Components/mainicons/profile.jpeg'
import Button from '../../Components/Button/Button';
import FollowContent from '../../Components/FollowContent/FollowContent'
import Trends from '../../Components/Trends/Trends'
import leftarrow from '../../Components/mainicons/right-arrows-direction-arrow-icon.svg'
import SearchInput from '../../Components/SearchInput/SearchInput';
import personone from '../../Components/mainicons/person-one.jpeg'
import arrowdown from '../../Components/mainicons/arrow-down.svg'
import retweet from '../../Components/mainicons/retweet.svg'
import heart from '../../Components/mainicons/heart.svg'
import comment from '../../Components/mainicons/comment.svg'
import persontwo from '../../Components/mainicons/person-two.jpeg'
import bigimage from '../../Components/mainicons/big-image.jpg'
import balloon from '../../Components/mainicons/balloon.svg'
import calendar from '../../Components/mainicons/calendar.svg'


function Profile() {
    return (
        <div className="profile-content">
            <div>
                <LeftSidebar />
            </div>
            <div className="profile-main-content">
                <div className="fix-content">
                    <img src={leftarrow} width="25px" className="left-arrow" />
                    <div className="fixed-content-two">
                        <p className="profile-name">Tife</p>
                        <p className="profile-handle">20 Tweets</p>
                    </div>
                </div>
                <div className="profile-img">
                    <img src={Background} width="576px" height="240px" className="bkg-image" />
                    <img src={profile} className="profile" width="134px" height="134px" />
                </div>
                <div className="profile-button">
                    <Button text="Edit profile" color="follow-button-two" />
                </div>
                <div className="profile-cont">
                    <div>
                        <p className="profile-name">Tife</p>
                        <p className="profile-handle">@tife</p>
                    </div>
                    <div>
                        <div className="profile-info-flex">
                            <div className="date-ofbirth">
                                <img src= {balloon} width="20px" className="balloon"/>
                                <p className="profile-handle">Born January 30, 1999  </p>
                            </div>
                            <div className="date-ofentry">
                                <img src= {calendar} width="20px"/>
                                <p className="profile-handle">Joined January 30, 2017</p>
                            </div>
                        </div>
                        <div className="f-details">
                            <span className="follow-details"> 200</span> <span className="profile-handle"> Following   </span>
                            <span className="details"> 100</span> <span className="profile-handle"> Followers</span>
                        </div>
                    </div>
                </div>
                <div className="listings">
                    <ul className="nav-list">
                        <li className="lists">Tweets</li>
                        <li className="list">Tweets & replies</li>
                        <li className="list">Media</li>
                        <li className="lists-two">Likes</li>
                    </ul>
                </div>
                <div className="home-feed-one">
                    <div className="home-feed-retweet">
                        <img src={retweet} alt="retweet" width="20px" height="15px" />
                        <p className="sandiso">iam Sandiso retweeted</p>
                    </div>
                    <div className="home-feed-one-message">
                        <img src={personone} className="person-one" />
                        <div className="home-feed-one-inner-content">
                            <span className="person-user-name">Titi</span><span className="handle"> @titilayo_t</span> <span className="handle"> . 34m</span>
                            <div className="profile-hello-everyone">
                                <p>Hello everyone</p>
                                <div>
                                    <img src={arrowdown} />
                                </div>
                            </div>
                            <div className="profile-feed-one-border">
                                <div>
                                    <p>The following media includes potentially sensitive content.</p>
                                    <p>Change settings</p>
                                </div>
                                <p className="view">View</p>
                            </div>
                            <div className="home-feed-tiny-icons">
                                <div className="first-tiny-icon">
                                    <img src={comment} width="20px" className="comment" />
                                    <div className="num">5</div>
                                </div>
                                <div className="first-tiny-icon">
                                    <img src={retweet} width="20px" className="retweet" />
                                    <div className="num">1</div>
                                </div>
                                <div className="first-tiny-icon">
                                    <img src={heart} width="20px" className="heart" />
                                    <div className="num">10</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-feed-two">
                    <img src={persontwo} alt="persontwo" className="person-two" />
                    <div className="home-message-two">
                        <div className="profile-home-feed-two-message">
                            <div>
                                <span className="person-user-name">Art Expression</span><span className="handle"> @ArtExpression</span><span className="handle"> . 15m</span>
                            </div>
                            <img src={arrowdown} />
                        </div>
                        <p className="hello-everyone">The amazing work of art using light painting</p>
                        <img src={bigimage} width="478px" height="400px" className="big-image" />
                        <div className="home-feed-tiny-icons">
                            <div className="first-tiny-icon">
                                <img src={comment} width="20px" className="comment" />
                                <div className="num">5</div>
                            </div>
                            <div className="first-tiny-icon">
                                <img src={retweet} width="20px" className="retweet" />
                                <div className="num">1</div>
                            </div>
                            <div className="first-tiny-icon">
                                <img src={heart} width="20px" className="heart" />
                                <div className="num">10</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-grid-inner">
                <div className="third-grid-content">
                    <SearchInput />
                    <div className="follow-profile">
                        <FollowContent name="You might like" />
                    </div>
                    <br />
                    <div className="trend-profile">
                        <Trends />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
