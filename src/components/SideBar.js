import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import { FaFacebook, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { toggleNav } from '../redux/sideBarSlice';

const SideBar = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.nav.isOpen);

  const handleHideNav = () => {
    dispatch(toggleNav());
  };

  const navStyle = {
    zIndex: '95',
    position: 'fixed',
    left: '0',
    top: '0',
    display: 'grid',
    gridTemplateRows: '1fr 3.5fr 1fr',
    width: '36vw',
    height: '100vh',
    transform: isOpen ? 'none' : 'translateX(-37vw)',
    backgroundColor: 'white',
    borderRight: 'rgb(240, 240, 240) solid 1px',
    transition: 'all 1s',
  };

  return (
    <nav style={navStyle}>
      <div className="logo-box">
        <h1 className="logo">MM</h1>
      </div>
      <ul className="pages-link">
        <li>
          <NavLink to="/" activeclassname="active">
            <button type="button" onClick={() => handleHideNav()}>
              HOME
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" activeclassname="active">
            <button type="button" onClick={() => handleHideNav()}>
              CALCULATOR
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/quotes" activeclassname="active">
            <button type="button" onClick={() => handleHideNav()}>
              QUOTES
            </button>
          </NavLink>
        </li>
      </ul>

      <div className="social-box">
        <FaPinterestP />
        <FaTwitter />
        <FaFacebook />
      </div>
    </nav>
  );
};

export default SideBar;
