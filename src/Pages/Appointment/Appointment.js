import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBenner from './AppointmentBenner';
import AvailableAppointments from './AvailableAppointments';


const Appointment = () => {
  const [date, setDate]=useState(new Date ());

    return (
        <div>

 <AppointmentBenner date={date} setDate={setDate}></AppointmentBenner>
 <AvailableAppointments date={date}></AvailableAppointments>
 <Footer></Footer>
        </div>
    );
};

export default Appointment;