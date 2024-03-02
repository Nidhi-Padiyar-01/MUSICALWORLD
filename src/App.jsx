
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Playlist from './components/Playlist/Playlist'
import { Routes, Route, BrowserRouter } from 'react-router-dom';


import {AnimatePresence} from 'framer-motion'
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import  Favorite  from './components/Favourites/Favourite'
import SongList from './components/Songs/Songs';




function App() {


  return (
    
<AnimatePresence >
    <div>
    <BrowserRouter>
    <Navbar/>
  
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Songs" element={<SongList/>}/>
        <Route path="/Playlist" element={<Playlist/>}/>
        <Route path="/Favorites" element={<Favorite/>}/>
        
        
        
      
      </Routes>
    </BrowserRouter>
  </div>
  </AnimatePresence>
      
  );
}

export default App
