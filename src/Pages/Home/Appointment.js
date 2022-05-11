import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from "../../assets/images/chair.png";
import { format } from 'date-fns';

const Appointment = () => {
    const [date, setDate]=useState(new Date ());
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
     <DayPicker mode='single' selected={date} onSelect={setDate}></DayPicker>
     <p> You gave selected :{format(date, 'pp')}
     </p>
    </div>
  </div>
</div>

            <Footer></Footer>
        </div>
    );
};

export default Appointment;