import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashbord = () => {
  const [user] = useAuthState(auth);
 const [admin,adminLoading] = useAdmin(user)

 if(adminLoading){
   return <Loading></Loading>
 }

    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h1 className='text-2xl font-bold text-purple-500'> Welcome to your Dashboard</h1>
          <Outlet></Outlet>
       
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashbord">My Appointments</Link></li>
            <li><Link to="/dashbord/review">My Reviews</Link></li>
            <li><Link to="/dashbord/myhistory">My Reviews</Link></li>
       { admin && <>
        <li><Link to="/dashbord/user">ALL Users</Link></li>
        <li><Link to="/dashbord/adddoctor">add Doctor</Link></li>
        <li><Link to="/dashbord/mangeDoctor">Manage Doctors</Link></li>
       </>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashbord;