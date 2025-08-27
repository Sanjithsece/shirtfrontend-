import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="footer-brand">
        <h3 className="footer-title">TeeVibe</h3>
        <p className="footer-tagline">Vintage & Modern Football Jerseys</p>
      </div>
      <div className="footer-socials">
        <a href="https://www.instagram.com/charisrex.clothing?igsh=MXZnOXJob2t6MzgyNA%3D%3D&utm_source=qr" aria-label="Instagram" className="social-icon">
          <Instagram size={20} />
        </a>
        <a href="#" aria-label="Facebook" className="social-icon">
          <Facebook size={20} />
        </a>
        <a href="#" aria-label="Twitter" className="social-icon">
          <Twitter size={20} />
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} CharisRex Clothing. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;

