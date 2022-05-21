
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Myappointment = () => {
    const [user] = useAuthState(auth);
 const [ appointments, setAppointments] = useState([]);
 const [adminLoading, setAdminLoading] = useState(true);
 
  const navigate = useNavigate();


 useEffect(() => {
     if(user) {
        fetch(`http://localhost:5000/booking?patient=${user.email}`,{
          method: 'GET',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => {
        
          if(res.status === 401 || res.status ===403 ){
            signOut(auth);
         localStorage.removeItem('accessToken');
          navigate('/')

          }
         return res.json()
        })
        .then(data => {

          setAppointments(data)
          setAdminLoading(false);
        });
     }


 },[user])
 
 if(adminLoading){
  return <Loading></Loading>
}

 

    return (
        <div>
            <h1> my Appointments {appointments.length} </h1>

            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time </th>
        <th>Treatment </th>
        <th>Payment </th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((a, index) => 
                <tr>
                <th>{index + 1}</th>
                <th>{a.patientName}</th>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                {(a.price && !a.paid) && <Link to={`/dashbord/Payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                {(a.price && a.paid) && <span className='text-success'>paid</span>}
                
              </tr>
                )
        }

    
     
      

    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Myappointment;