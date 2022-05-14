import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
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
          </ul>
        
        </div>
      </div>
    );
};

export default Dashbord;