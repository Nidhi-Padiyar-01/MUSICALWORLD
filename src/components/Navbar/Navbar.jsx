
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
