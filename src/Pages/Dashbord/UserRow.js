import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email ,role} = user;
  const makeadmin = ()=> {
    fetch(`https://afternoon-bastion-83513.herokuapp.com/user/admin/${email}`, {
      method: 'PUT', 
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then (res => {
      if(res.status === 403){
        toast.error('Failed to make an addmin ');
      }
      return res.json()
    })
    .then (data => {
     if(data.modifiledCount > 0) {
      refetch();
      toast.success('Successfully made an admin');
     }
    })
  }

    return (
      
             <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin'&& <button onClick={makeadmin} class="btn btn-active uppercase text-white">Make admin</button>}</td>
        <td><button class="btn btn-active uppercase text-white">Remove User</button></td>
      </tr>
            
      
    );
};

export default UserRow;