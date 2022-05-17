import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { isLoading, data : users ,refetch } = useQuery('repoData', () =>
    fetch('https://afternoon-bastion-83513.herokuapp.com/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res =>
      res.json()
    )
  )
  if(isLoading){
      return <Loading></Loading>
  }
    return (
        <div>
            <h2 className='text-2xl'> aLL USERS {users.length} </h2>

            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
{
    users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
}
     
    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Users;