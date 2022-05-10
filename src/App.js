
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
   

    
    <Routes>
 <Route path='/' element={<Home></Home>}> </Route>
 <Route path='about' element={<About></About>}> </Route>

    </Routes>

    </div>
  );
}

export default App;
