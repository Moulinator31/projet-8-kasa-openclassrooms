import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import Appartement from './pages/Appartement';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Header />
  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement/:id" element={<Appartement />} />
    </Routes>
  </Router>
  <Footer />
  </React.StrictMode>
);
reportWebVitals();
