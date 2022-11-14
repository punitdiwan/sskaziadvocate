import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

import Home from './Components/Home';
import Constitutional from './Components/Constitutional';
import Civilmatters from './Components/Civilmatters';
import Criminal from './Components/Criminal';
import Legaldraft from './Components/Legaldraft';
import Revenue from './Components/Revenue';
import Arbitration  from './Components/Arbitration ';
import Landmatter from './Components/Landmatter';
import Servicematter from './Components/Servicematter';
import Publicmatter from './Components/Publicmatter';
import Othermatters from './Components/Othermatters';
import Ourteam from './Components/Ourteam';
import Disclamer from './Components/Disclamer';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <ScrollToTop/>
      <Routes>
       <Route path="/" element={ <Home/>} />
       <Route path='constitutional' element={<Constitutional/>}/>
       <Route path='/civilmatters' element={<Civilmatters/>} />
       <Route path='/criminal' element={<Criminal/>}/>
       <Route path='/legaldraft' element={ <Legaldraft/>} />
       <Route path='/revenue' element={<Revenue/>}/>
       <Route path='/arbitration' element={<Arbitration />} />
       <Route path='/landlaw' element={<Landmatter/>}/>
       <Route path='/services' element={ <Servicematter/>} />
       <Route path='/publictrust' element={ <Publicmatter/>} />
       <Route path='/moreservices' element={ <Othermatters/>} />



       
       <Route path='/ourteam' element={<Ourteam/>} />
       <Route path="/disclamer" element={<Disclamer/>} />
       <Route path="/contact" element={<Contact/> } />
      </Routes>
      </BrowserRouter>
     
      

    </div>
    
  );
}

export default App;
