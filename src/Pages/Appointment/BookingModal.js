import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const BookingModal = ({date,treatment,setTreatment}) => {
    const {_id, name, slots} = treatment;
    const [user, loading] = useAuthState(auth);
    console.log(user);


 const handleBooking = event => {
     event.preventDefault()
     const slot = event.target.slot.value;
     console.log(slot,_id,name);
     setTreatment(null);

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
    <input type="text" placeholder="phone" className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="Submit" className="btn btn-secondary text-white w-full max-w-xs" />
    </form>

  </div>
</div>
            
        </div>
    );
};

export default BookingModal;