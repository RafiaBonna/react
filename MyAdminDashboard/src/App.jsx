import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from './pages/Master';
import AddCategory from './pages/category/AddCategory';
import ManageCategory from './pages/category/ManageCategory';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />} />
        <Route path="/add-cat" element={<AddCategory />} />
        <Route path="/manage-cat" element={<ManageCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;