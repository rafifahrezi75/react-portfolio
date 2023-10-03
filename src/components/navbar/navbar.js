import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="dekstopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='dekstopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='dekstopMenuListItem'>Clients</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='dekstopMenuListItem'>About</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='dekstopMenuListItem'>Portfolio</Link>
      </div>
      <button className="dekstopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt="" className="dekstopMenuImg" />Contact Me
      </button>

      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>Clients</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>About</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar