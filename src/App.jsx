
import Home from './components/Home/Home';
import About from './components/About/About';
import Favourites from './components/Favourites/Favourites';
import Playlist1 from './components/Playlist/Playlist1';
import Login from './components/Login/Login';


import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    

    <div>
    <BrowserRouter>
    <Navbar/>
 
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Favourites" element={<Favourites/>}/>
        {/* <Route path="/Playlist" element={<Playlist/>}/> */}
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Playlist1" element={<Playlist1/>}/>
        
        
        
      
      </Routes>
    </BrowserRouter>
  </div>
      
  );
}

export default App
