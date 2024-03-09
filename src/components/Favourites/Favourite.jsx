


import { useState, useEffect } from 'react';
import axios from 'axios';

function Favorites() {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    async function fetchFavoriteSongs() {
      try {
        const response = await axios.get('http://localhost:3000/songs');
        setFavoriteSongs(response.data);
      } catch (error) {
        console.error('Failed to fetch favorite songs:', error.message);
      }
    }
    fetchFavoriteSongs();
  }, []);

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/favorite_songs/${id}`);
      // Update the favorite songs list after removal
      setFavoriteSongs(favoriteSongs.filter((song) => song.id !== id));
    } catch (error) {
      console.error('Failed to remove from favorites:', error.message);
    }
  };

  return (
    <div>
      <h1>Your Favorite Songs</h1>
      <div className="song-list">
        {favoriteSongs.map((song) => (
          <div key={song.id} className="song">
            <h2>{song.song_title}</h2>
            <p>{song.description}</p>
            <audio controls>
              <source src={`http://localhost:3000/uploads/musics/${song.music_file}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <img src={`http://localhost:3000/uploads/images/${song.thumbnail}`} alt="Thumbnail" />
            <button onClick={() => removeFromFavorites(song.id)}>Remove from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
