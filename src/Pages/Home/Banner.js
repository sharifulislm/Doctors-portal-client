import React from 'react';
import chair from '../../assets/images/chair.png';
import BtnPrimary from '../Shared/BtnPrimary';
import './Home.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen benner-box">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
            <p className="py-6 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

            <BtnPrimary>Get Started</BtnPrimary>
          </div>
        </div>
      </div>
    );
};

export default Banner;