
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import CivilLitigation from './Components/CivilLitigation ';
import Disclamer from './Components/Disclamer';
import Property from './Components/Property';
import RealEstate from './Components/RealEstate';
import Registration from './Components/Registration';
import Revenue from './Components/Revenue';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ourteam from './Components/Ourteam';
// import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <ScrollToTop/>
      <Routes>
       <Route path="/" element={ <Home/>} />
       <Route path='/civillitigation' element={<CivilLitigation/>} />
       <Route path='/realestate' element={<RealEstate/>}/>
       <Route path='/property' element={<Property/>}/>
       <Route path='/registration' element={<Registration/>} />
       <Route path='/revenue' element={<Revenue/>}/>
       <Route path='/ourteam' element={<Ourteam/>} />
       <Route path="/disclamer" element={<Disclamer/>} />
       <Route path="/contact" element={<Contact/> } />
      </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
