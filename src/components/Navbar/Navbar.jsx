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