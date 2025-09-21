import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomeePage from './pages/HomeePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
const App = () => {
  return (
    <div>
         <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collection" element={<Collection />} />
    </Routes>
  </BrowserRouter>,
    </div>
  );
};

export default App;