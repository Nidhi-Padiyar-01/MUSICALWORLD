
import Home from './components/Home/Home';
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {


  return (
    

    <div>
    <BrowserRouter>
    <Home/>
 
      <Routes>
        <Route path="./components/Home/Home.jsx" element={<Home/>}/>
        
        
      
      </Routes>
    </BrowserRouter>
  </div>
      
  );
}

export default App
