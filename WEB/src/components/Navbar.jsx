import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles.js';
import { logo } from '../assets';


function Navbar() {
    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white`} >
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <img src={logo}  alt="logo" className="w-9 h-9 object-contain"/>
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              DL articles&nbsp;
            </p>
              <ul>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
              </ul>
            </div>
        </nav>
    );
}

export default Navbar;
