import React from 'react';
import { useDispatch } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Quotes from './components/QuoteApi';
import Calculator from './components/Calculator';
import SideBar from './components/SideBar';
import { toggleNav } from './redux/sideBarSlice';

import './App.css';

const App = () => {
  const location = useLocation();
  const hideNavigation = location.pathname === '/';
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <FiMenu className="menu-icon" onClick={() => dispatch(toggleNav())} />

      <SideBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/calculator" index element={<Calculator />} />
        <Route path="/quotes" index element={<Quotes />} />
      </Routes>
    </div>
  );
};

export default App;
