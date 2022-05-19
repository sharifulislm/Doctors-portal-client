import React from 'react';
import appointment from '../../assets/images/appointment.png';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const FromBox = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w5ckfr1', 'template_4sllcq9', e.target, 'HmDKt3gAaokdpNhzA')
      .then((result) => {
          console.log(result.text);
          toast('Successfully sent your email')
      }, (error) => {
          console.log(error.text);
          toast('Failed your email Try again')
          
      });
      e.target.reset();
  };


  return (
    
<div style={{background:`url(${appointment})`,
        backgroundSize: 'cover',
        }} className="hero min-h-screen">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">

   <form onSubmit={sendEmail} >
   <div  className='text-center mb-12 '>
      <h3 className='text-xl font-bold uppercase' >Our services  </h3>
            <h2 className='text-4xl'> Services We Provide</h2>
      </div>
   <input type="text" placeholder="name" name='name' className="input w-full max-w-xs w-full max-w-xs text-black mb-5" />
   <input type="email" placeholder="email" name='email' className="input w-full max-w-xs w-full max-w-xs text-black mb-5" />
   <textarea type="text" placeholder="Your message" name='message' className="input w-full max-w-xs w-full max-w-xs h-32 text-black mb-5  " />

<br></br>
<input className='btn btn-secondary' type="submit" value='submit'/>
   </form>



  </div>
</div>
      
  
  );
};

export default FromBox;