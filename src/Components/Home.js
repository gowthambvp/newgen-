import React from 'react'
import Navbar from './Navbar';
import BannerBackGrounnd from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='home-anner-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackGrounnd} alt='' />
                </div>
                <div className='home-image-section'>
                    <img src={BannerImage} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home
