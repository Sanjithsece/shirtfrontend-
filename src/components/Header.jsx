import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-content">
        <h1 className="header-title">T-shirt</h1>
        <div className="header-icons">
          <button className="header-button">
            <ShoppingCart size={24} />
          </button>
          <button className="header-button menu-button-mobile">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

