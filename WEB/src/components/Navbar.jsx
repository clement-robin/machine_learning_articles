import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { logo } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`} 
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-white text-[18px] font-bold flex">
          DL articles &nbsp;
        </p>
        <img src={logo}  alt="logo" className="w-9 h-9 object-contain"/>
        <ul className="list-none hidden sm:flex flex-row gap-10">
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
