import { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import Logo from '/prida-logo.png';
import Menu from '/menu.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const smoothScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`navbar-container ${menuOpen ? 'menu-open' : ''}`} ref={navbarRef}>
      <div className='navbar-container__logo'>
        <img src={Logo} alt="Agrocomercial Prida" />
      </div>
      <div className='navbar-container__menu' onClick={toggleMenu}>
        <img src={Menu} alt="Menu" />
      </div>
      <div className='navbar-container__links'>
        <a href="#" onClick={() => { smoothScrollToSection('inicio'); closeMenu(); }}> INICIO </a>
        <a href="#" onClick={() => { smoothScrollToSection('quienes-somos'); closeMenu(); }}> QUIENES SOMOS </a>
        <a href="#" onClick={() => { smoothScrollToSection('productos'); closeMenu(); }}> PRODUCTOS </a>
        <a href="#" onClick={() => { smoothScrollToSection('mision-vision'); closeMenu(); }}> MISIÓN Y VISIÓN </a>
        <a href="#" onClick={() => { smoothScrollToSection('contacto'); closeMenu(); }}> CONTACTO </a>
      </div>
      {menuOpen && <div className="close-button" onClick={closeMenu}>X</div>}
    </div>
  );
};

export default Navbar;
