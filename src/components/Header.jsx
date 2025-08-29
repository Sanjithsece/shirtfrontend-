import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
 import logo from '../images/logo.png';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-content">
        {/* New container for logo and title */}
        <div className="header-brand">
          <img src={logo} alt="CharisRex Clothing Logo" className="header-logo" />
          <h1 className="header-title">CharisRex Clothing</h1>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

