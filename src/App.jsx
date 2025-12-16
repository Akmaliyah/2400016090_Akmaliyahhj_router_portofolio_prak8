import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Project from'./Pages/Project'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          {/* Wildcard route untuk 404 Not Found */}
          <Route path="*" element={<div className="text-center
          mt-10">404 - Halaman Tidak Ditemukan</div>} />
        </Routes>
    </div>
 
    
  );
}

export default App
