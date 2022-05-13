import React from 'react';
import appointment from '../../assets/images/appointment.png';
import BtnPrimary from '../Shared/BtnPrimary';

const FromBox = () => {
  return (
    
<div style={{background:`url(${appointment})`,
        backgroundSize: 'cover',
        }} className="hero min-h-screen">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">

   <div>
   <div  className='text-center mb-12 '>
      <h3 className='text-xl font-bold uppercase' >Our services  </h3>
            <h2 className='text-4xl'> Services We Provide</h2>
      </div>
   <input type="text" placeholder="Email Address" className="input input-bordered input-success w-full max-w-xs  mb-5" />
   <input type="text" placeholder="Subject" className="input input-bordered input-success w-full max-w-xs mb-5" />
   <textarea type="text" placeholder="Your message" className="input input-bordered input-success w-full max-w-xs mb-5  " />

<br></br>
   <BtnPrimary> Sunmit</BtnPrimary>
   </div>



  </div>
</div>
      
  
  );
};

export default FromBox;