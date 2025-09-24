import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Master from './pages/Master';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Master />} />
      <Route path="" element={<Header />} />
      <Route path="/" element={<Footer />} />
      <Route path="/" element={<Sidebar />} />
    </Routes>
  </BrowserRouter>,
    </div>
  );
};

export default App;