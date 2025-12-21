import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetHelp from './pages/GetHelp';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-help" element={<GetHelp />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;