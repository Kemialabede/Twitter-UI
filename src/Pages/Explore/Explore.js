import React from 'react';
import LeftSidebar from '../../Components/LeftSidebar';
import FormInput from '../../Components/FormInput/FormInput';
import setting from '../../Components/mainicons/setting-image.png'
import './Explore.css'
import FollowContent from '../../Components/FollowContent/FollowContent';
import lagos from '../../Components/mainicons/lagos-city.jpg'
import nature from '../../Components/mainicons/nature.jpeg'
import arrow from '../../Components/mainicons/arrow-down.svg'
import first from '../../Components/mainicons/first.jpg'
import search from '../../Components/mainicons/search-icon.png'

function Explore() {
    return (
        <div className="explore">
            <div className="sidebar">
                <LeftSidebar />
            </div>
            <div className="explore-main-content">
                <div className="search-input">
                    <div className="explore-search-border">
                        <div className="media-size-search">
                            <img src={search} width="30px" className="search-user" />
                            <input type="text" placeholder="Search Twitter" className="explore-input"/>
                        </div>
                    </div>
                        <img src={setting} className="setting" />
                </div>
                <div className="explore-image">
                    <img src={lagos} alt="Lagos" width="100%" />
                </div>
                <div className="image-text">
                    <p>The beautiful side of nature</p>
                    <p>Its natural gift</p>
                </div>
                <div className="explore-text-content">
                    <div className="explore-head">
                        <h4>Trend for you</h4>
                    </div>
                    <div className="explore-line"></div>
                    <div className="explore-inner-content">
                        <div>
                            <p className="trend-in-nigeria">Trending in Nigeria</p>
                            <p className="second-text">Dr Funmilayo</p>
                        </div>
                        <img src={arrow} />
                    </div>
                    <div className="explore-line"></div>
                    <div className="explore-inner-content">
                        <div>
                            <p className="trend-in-nigeria">Trending in Nigeria</p>
                            <p className="second-text">Tife</p>
                        </div>
                        <img src={arrow} />
                    </div>
                    <div className="explore-line"></div>
                    <div className="explore-inner-content">
                        <div>
                            <p className="trend-in-nigeria">Trending in Nigeria</p>
                            <p className="second-text">Bola</p>
                        </div>
                        <img src={arrow} />
                    </div>
                    <div className="explore-line"></div>
                    <div className="explore-inner-content">
                        <div>
                            <p className="trend-in-nigeria">Trending in Nigeria</p>
                            <p className="second-text">Lasisi</p>
                        </div>
                        <img src={arrow} />
                    </div>
                    <div className="explore-line"></div>
                    <div>
                        <div className="explore-inner-content">
                            <div>
                                <p className="trend-in-nigeria">Trending in Nigeria</p>
                                <p className="second-text">#lockdown</p>
                            </div>
                            <img src={arrow} />
                        </div>
                        <div className="explore-inner-flex">
                            <div><img src={first} width="170px" className="inner-image" /></div>
                            <div className="inner-flex-content">
                                <p>Auto export slumps 73% in May due to lockdown disruption...</p>
                                <p>the exports of auto component too suffered a major <br /> setback.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="explore-line"></div>
                    <div>
                        <p className="show-more">Show more</p>
                    </div>
                </div>
            </div>
            <div className="explore-follow-content">
                <FollowContent name="Who to follow" />
                {/* <div className="content-footer">
                    <p>Terms</p>
                    <p>Privacy policy</p>
                    <p>Cookies</p>
                    <p>Ads info</p>
                    <div>
                        <p>More</p>
                        <img src={arrow} />
                    </div> 
                </div> */}
            </div>
        </div>
    )
}

export default Explore;
