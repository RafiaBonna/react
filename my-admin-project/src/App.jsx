import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Master from './pages/Master';
import AddCategory from './pages/category/AddCategory';
import ManageCategory from './pages/category/ManageCategory';
const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Master />} />
      <Route path="add-cat" element={<AddCategory/>} />
      <Route path="/manage-cat" element={<ManageCategory />} />
      
    </Routes>
  </BrowserRouter>,
    </div>
  );
};

export default App;