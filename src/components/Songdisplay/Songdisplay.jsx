

import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Songdisplay.css'
import { Link } from 'react-router-dom';
function SongDisplay() {
  const [songs, setSongs] = useState([]);
  const [user, setUser] = useState({ id: 1 }); 

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await axios.get('http://localhost:3000/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Failed to fetch songs:', error.message);
      }
    }
    fetchSongs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/songs/${id}`);
      setSongs(songs.filter((song) => song.id !== id));
    } catch (error) {
      console.error('Failed to delete song:', error.message);
    }
  };

  // const addToFavorites = async (songId) => {
  //   try {
  //     await axios.post('http://localhost:3000/favorite_songs', { song_id: songId });
  //     // Refresh songs list after adding to favorites
  //     fetchSongs();
  //   } catch (error) {
  //     console.error('Failed to add to favorites:', error.message);
  //   }
  // };
  const addToFavorites = async (songId) => {
    try {
      await axios.post('http://localhost:3000/favorite_songs', { user_id: user.id, song_id: songId });
      alert('Added to Favorites');
    } catch (error) {
      alert('Failed to add to Favorites');
    }
  };
  
  

  
  
  return (
    <div>
      <h1>Songs</h1>
      <button><Link to="/upload">UPLOAD SONGS</Link></button>
      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song">
            <h2>{song.song_title}</h2>
            <p>{song.description}</p>
            <img src={`http://localhost:3000/uploads/images/${song.thumbnail}`} alt="Thumbnail" />
            <audio controls>
              <source src={`http://localhost:3000/uploads/musics/${song.music_file}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
           <div className='buttons'>
           <button onClick={() => addToFavorites(song.id)}>Add to Favorites</button>

            <button onClick={() => handleDelete(song.id)} className='button'>Delete</button>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongDisplay;
