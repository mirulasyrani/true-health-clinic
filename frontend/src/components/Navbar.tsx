import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <img 
              src="https://static.wixstatic.com/media/16fbea_80099f8100c348c0a816d3f98e776637~mv2.png/v1/fill/w_185,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp_Image_2023-04-27_at_15_35_41-removebg-preview.png" 
              alt="Klinik True Health Logo" 
              style={{ 
                height: '100px', 
                width: 'auto'
              }}
            />
          </div>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
            <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
          </ul>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
