import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'; 
// import Home from './components/Home/Home'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
