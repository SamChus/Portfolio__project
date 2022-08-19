import { useState } from 'react';
import menuClose from '../images/icon-close.svg';
import menuOpen from "../images/icon-menu.svg";

const SideNav = () => {
  const [showMenu, setShowMenu] = useState(false)

  let menu

  if (showMenu) {
    menu = <div className='side__nav'>
      <img src={menuClose} alt="close" className='menu__close' onClick={() => setShowMenu(false)}/>
        <ul>
          <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
        </ul>
    </div>
  }

    return (  
        <nav className="mobile__nav">
           <img className="menu__open" src={menuOpen} alt="open" onClick={() => setShowMenu(true)}/>
        {menu}
      </nav>
    );
}
 
export default SideNav;