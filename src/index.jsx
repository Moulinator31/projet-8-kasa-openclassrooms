import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import Accommodation from './pages/Accommodation';
import Error from './pages/Error';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Header />
  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>
);
reportWebVitals();
