import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Card from './components/Card';


const App = () => {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />

        </Routes>
      </Router>
    </>
  );
};



export default App;