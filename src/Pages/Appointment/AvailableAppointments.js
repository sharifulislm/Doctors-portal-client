import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setSercices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setSercices(data))
    } ,[])
    return (
        <div>
            
             <h4 className='text-xl text-secondary text-center my-12'>  Available Appointments on:{format(date, 'PP')}</h4>
             
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                 {
                     services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                     
                 }
             </div>
             {
                 treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} ></BookingModal>
             }
            
        </div>

    );
};

export default AvailableAppointments;