
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Pages/Dashbord/Dashbord';
import Myappointment from './Pages/Dashbord/Myappointment';
import MyReview from './Pages/Dashbord/MyReview';


function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
   

    
    <Routes>
 <Route path='/' element={<Home></Home>}> </Route>
 <Route path='about' element={<About></About>}> </Route>
 <Route path='appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}> </Route>
 {/* Nested routes start for dashbord  */}
 <Route path='dashbord' element={<RequireAuth>
  <Dashbord></Dashbord>
   </RequireAuth>}> 
   <Route index element={<Myappointment></Myappointment>}></Route>
   <Route path='review' element={<MyReview></MyReview>}></Route>
   </Route>
    {/* Nested routes for dashbord end  */}
 <Route path='login' element={<Login></Login>}> </Route>
 <Route path='Signup' element={ <Signup></Signup> }> </Route>

    </Routes>

  <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
