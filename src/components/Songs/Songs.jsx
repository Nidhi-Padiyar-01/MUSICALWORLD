


import  { useState } from 'react';
import axios from 'axios';
import './Songs.css';

function SongList() {
  const [musicFile, setMusicFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [songTitle, setSongTitle] = useState('');
  const [description, setSongDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [userId, setUserId] = useState('');

  const handleMusicFileChange = (event) => {
    setMusicFile(event.target.files[0]);
  };

  const handleThumbnailFileChange = (event) => {
    setThumbnailFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!musicFile || !thumbnailFile || !songTitle || !description || !categoryId || !userId) {
      alert('Please provide all the required information');
      return;
    }

    const formData = new FormData();
    formData.append('file', musicFile);
    formData.append('thumbnail', thumbnailFile);
    formData.append('song_title', songTitle);
    formData.append('description', description);
    formData.append('category_id', categoryId);
    formData.append('user_id', userId);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data.message);
    } catch (error) {
      alert('Failed to upload song');
    }
  };

  return (
    <div className='add-song-form'>
      <h1>Upload Songs</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleMusicFileChange} required />
      
        <input type='text' placeholder='Enter Song Title' value={songTitle} onChange={(e) => setSongTitle(e.target.value)} required />
        <input type='text' placeholder='Enter Song Description' value={description} onChange={(e) => setSongDescription(e.target.value)} required />
        <input type='text' placeholder='Enter Category ID' value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required />
        <input type='text' placeholder='Enter User ID' value={userId} onChange={(e) => setUserId(e.target.value)} required />
        <h2>ADD THUMBNAIL</h2>
        <input type="file" name="thumbnail" onChange={handleThumbnailFileChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default SongList;
