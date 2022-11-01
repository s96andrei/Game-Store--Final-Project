import React from "react";
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart';
import SignIn from './components/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/home" exact element={<HomePage />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/login" exact element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
