
import Home from './components/Home/Home';
<<<<<<< HEAD
import About from './components/About/About';
import Favourites from './components/Favourites/Favourites';
import Playlist1 from './components/Playlist/Playlist1';
import Login from './components/Login/Login';


import './App.css'
=======
import Login from './components/Login/Login'
import Playlist from './components/Playlist/Playlist'
>>>>>>> b645c92ec3426e76700e66bdef2ebd06dc8495b1
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


import {AnimatePresence} from 'framer-motion'
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import  Favorite  from './components/Favourites/Favourite'
import Songs from './components/Songs/Songs'
import SongList from './components/Songdisplay/Songdisplay';



function App() {


  return (
    
<AnimatePresence >
    <div>
    <BrowserRouter>
    <Navbar/>
<<<<<<< HEAD
 
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Favourites" element={<Favourites/>}/>
        {/* <Route path="/Playlist" element={<Playlist/>}/> */}
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Playlist1" element={<Playlist1/>}/>
=======
  
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Songs" element={<SongList/>}/>
        <Route path="/Playlist" element={<Playlist/>}/>
        <Route path="/Favorites" element={<Favorite/>}/>
        <Route path="/upload" element={<Songs/>}/>
>>>>>>> b645c92ec3426e76700e66bdef2ebd06dc8495b1
        
        
        
      
      </Routes>
    </BrowserRouter>
  </div>
  </AnimatePresence>
      
  );
}

export default App
