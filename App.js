// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import EditProduct from './Components/EditProduct';
import AddProduct from './Components/AddProduct';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/show/:id" element={<ProductDetail />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="products/new" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;