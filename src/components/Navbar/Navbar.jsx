<<<<<<< HEAD
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  return (

    
    
        <nav>
          <li><Link className='home' to='/Home'>Home</Link></li>
          <li><Link className='about' to='/About'>About</Link></li>
          <li><Link className='playlist' to='/Playlist1'>Playlist</Link></li>
          <li><Link className='favourites' to='/Favourites'>Favourites</Link></li>
          <li><Link className='Login' to='/Login'>Login</Link></li>
          
          
        </nav>
    

  );
}

export default Navbar;
=======

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/songs">songs</Link></li>
        
        
        <li><Link to="/Playlist">Playlist</Link></li>
        <li><Link to="/Favorites">Favorites</Link></li>
        <li><Link to="/Login">Login</Link></li>
        </ul>
    </nav>
    
  );
}

export default Navbar;
>>>>>>> b645c92ec3426e76700e66bdef2ebd06dc8495b1
