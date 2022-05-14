import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({date,treatment,setTreatment,refetch}) => {
    const {_id, name, slots} = treatment;
    const [user, loading] = useAuthState(auth);
   
     const formatedDate = format(date, 'PP');

 const handleBooking = event => {
     event.preventDefault()
     const slot = event.target.slot.value;
     const booking = {
         treatmentId: _id,
         treatment : name,
         date: formatedDate,
         slot,
         patient:user.email,
         patientName:user.displayName,
         phone: event.target.phone.value
     }

     fetch('http://localhost:5000/booking', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(booking)
     })
     .then(res => res.json())
     .then(data => {
console.log(data);
  if(data.success){
      toast(`Appointment is set, ${formatedDate} at ${slot}`)
  }
  else{
    toast.error(`Already gave and Appointment on, ${data.booking?.data} at ${data.booking.slot}`)
  }
  refetch(refetch)
  setTreatment(null);
     })
  


   

 }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-secondary">Booking for :  {name}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
    <select name='slot' className="select select-bordered w-full max-w-xs">
     {
         slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
     }

 </select>
    <input type="Name" name='name' disabled value={user?.displayName} placeholder="Your name" className="input input-bordered w-full max-w-xs" />
    <input type="email" placeholder="Email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="phone" name='phone' className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="Submit" className="btn btn-secondary text-white w-full max-w-xs" />
    </form>


  </div>
</div>
            
        </div>
       
    );
};

export default BookingModal;