import React from "react";
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart';
import SignIn from './components/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/login" exact element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
