import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';
import Modal from './Modal';

const ManageDoctors = () => {
    const [deleteingdoctor ,setDeleteingdoctor]= useState(null);
    const {data: doctors, isLoading, refetch} = useQuery('doctors', ()=> fetch('http://localhost:5000/doctor' , {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

     if(isLoading){
         return <Loading></Loading>
     }

    return (
        <div>
            <h2 className='text-center text-2xl'> mange Doctor {doctors.length}</h2>

            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
          doctors.map((doctor,index) => <DoctorRow key={doctor._id}
           doctor={doctor} refetch={refetch} 
           index={index} setDeleteingdoctor={setDeleteingdoctor}></DoctorRow> )
      }
  
      </tbody>
      </table>
  
    
</div>
{deleteingdoctor && <Modal
deleteingdoctor={deleteingdoctor}
refetch={refetch}
setDeleteingdoctor={setDeleteingdoctor}
>
    </Modal>}
            
        </div>
    );
};

export default ManageDoctors;