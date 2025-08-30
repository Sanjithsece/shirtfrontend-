import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="footer-brand">
        <h3 className="footer-title">CharisRex Clothing</h3>
        <p className="footer-tagline">Vintage & Modern Football Jerseys... ! T-shirts with a collar: ₹379 || 
T-shirts without a collar (normal): ₹329</p>
      </div>
      
    </div>
    <div className="footer-bottom">

      <div className="developer-credit">
        <p>Designed & Developed by <strong>SANJITH S</strong></p>
        <p className="freelance-contact">
          For freelance web development and Desining, contact: <strong>9894755053</strong>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

