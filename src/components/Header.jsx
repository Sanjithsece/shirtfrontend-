import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-content">
        {/* New container for logo and title */}
        <div className="header-brand">
          <img src="src\images\logo.png" alt="CharisRex Clothing Logo" className="header-logo" />
          <h1 className="header-title">CharisRex Clothing</h1>
        </div>

        
      </div>
    </div>
  </header>
);

export default Header;

