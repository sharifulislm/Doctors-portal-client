
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Home/Appointment';


function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
   

    
    <Routes>
 <Route path='/' element={<Home></Home>}> </Route>
 <Route path='about' element={<About></About>}> </Route>
 <Route path='appointment' element={<Appointment></Appointment>}> </Route>

    </Routes>

 

    </div>
  );
}

export default App;
