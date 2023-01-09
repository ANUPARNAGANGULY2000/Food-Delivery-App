import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import {Route, Routes } from "react-router-dom";
import Home from './pages/home.js';
import About from './pages/about.js';
import Menu from './pages/menu.js';
import Gallery from './pages/gallery.js';
import Reservation from './pages/reservation.js';
import MyCart from './pages/myCart';
import Sidebar from './components/sidebarnenu';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
    <div>
      <Provider store={store}>
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/"element={<Home />} ></Route>
        <Route path="/about"element={ <About/> } ></Route>
        <Route path="/menu"element={<Menu/>} ></Route>
        <Route path="/gallery"element={< Gallery />} ></Route>
        <Route path="/reservation"element={<Reservation/>} ></Route>
        <Route path="/myCart" element ={<MyCart/>} ></Route>
      </Routes>
      </Sidebar>
    </BrowserRouter>
    </Provider>
    </div>

  );
  
};

export default App;
