import React from 'react';
import LeftSidebar from '../../Components/LeftSidebar';
import Trends from '../../Components/Trends/Trends'
import FollowContent from '../../Components/FollowContent/FollowContent'
import profile from '../../Components/mainicons/profile.jpeg'
import gif from '../../Components/mainicons/gif.svg'
import photo from '../../Components/mainicons/photo.svg'
import smile from '../../Components/mainicons/smile.svg'
import mail from '../../Components/mainicons/mail.svg'
import retweet from '../../Components/mainicons/retweet.svg'
import heart from '../../Components/mainicons/heart.svg'
import comment from '../../Components/mainicons/comment.svg'
import personone from '../../Components/mainicons/person-one.jpeg'
import arrowdown from '../../Components/mainicons/arrow-down.svg'
import persontwo from '../../Components/mainicons/person-two.jpeg'
import bigimage from '../../Components/mainicons/big-image.jpg'
import personthree from '../../Components/mainicons/person-three.jpeg'
import bigtwo from '../../Components/mainicons/bigtwo.png'
import './Home.css'
import SearchInput from '../../Components/SearchInput/SearchInput';

function Home() {
    return (
        <div className="home-content">
            <div className="sidebar">
                <LeftSidebar />
            </div>
            <div className="home-main-content">
                <div className="home-fixed-content">
                    <div className="fixed-two">
                        <p className="profile-name">Home</p>
                    </div>
                </div>
                <div>
                    <div className="textarea">
                        <div>
                            <img src={profile} className="profile-pics" />
                        </div>
                        <div>
                            <input type="text" placeholder="What is happening?" className="input-text" />
                            <div className="tweet-column">
                                <div className="tweet-icon">
                                    <img src={photo} width="23px" className="tiny-icons" />
                                    <img src={gif} width="23px" className="tiny-icons" />
                                    <img src={smile} width="23px" className="tiny-icons" />
                                    <img src={mail} width="23px" className="tiny-icons" />
                                </div>
                                <div className="button-tweet">
                                <button className="tweet-button">Tweet</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
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
                            <div className="hello-everyone">
                                <p>Hello everyone</p>
                                <div>
                                    <img src={arrowdown} className="arrow-down"/>
                                </div>
                            </div>
                            <div className="home-feed-one-border">
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
                <div className="home-feed-one">
                    <div className="home-feed-retweet">
                        <img src={retweet} alt="retweet" width="20px" height="15px" />
                        <p className="sandiso">iam Sandiso retweeted</p>
                    </div>
                    <div className="home-feed-one-message">
                        <img src={personone} className="person-one" />
                        <div className="home-feed-one-inner-content">
                            <span className="person-user-name">Titi</span><span className="handle"> @titilayo_t</span> <span className="handle"> . 34m</span>
                            <div className="hello-everyone">
                                <p>Hello everyone</p>
                                <div>
                                    <img src={arrowdown} />
                                </div>
                            </div>
                            <div className="home-feed-one-border">
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
                        <div className="home-feed-two-message">
                            <div>
                                <span className="person-user-name">Art Expression</span><span className="handle"> @ArtExpression</span><span className="handle"> . 15m</span>
                            </div>
                            <img src={arrowdown} />
                        </div>
                        <p className="hello-everyone">The amazing work of art using light painting</p>
                        <img src={bigimage} width="500px" height="400px" className="big-image" />
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
                <div className="home-feed-two">
                    <img src={personthree} alt="personthree" className="person-two" />
                    <div className="home-message-two">
                        <div className="home-feed-two-message">
                            <div>
                                <span className="person-user-name">Art Expression</span><span className="handle"> @ArtExpression</span><span className="handle" > . 15m</span>
                            </div>
                            <img src={arrowdown} />
                        </div>
                        <p className="hello-everyone">The amazing work of art using light painting</p>
                        <img src={bigtwo} width="500px" height="400px" className="big-image" />
                        <div className="home-feed-tiny-icons">
                            <div className="first-tiny-icon">
                                <img src={comment} width="2px" className="comment" />
                                <div className="num">5</div>
                            </div>
                            <div className="first-tiny-icon">
                                <img src={retweet} width="13px" className="retweet" />
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
            <div className="third-grid-content">
                <SearchInput />
                <div className="follow-profile">
                    <Trends />
                </div>
                <div className="trend-profile">
                    <FollowContent name="You might like" />
                </div>
            </div>
        </div>
    )
}

export default Home;
