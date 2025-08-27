import React from 'react';
import { Instagram } from 'lucide-react';

const FloatingInstagramButton = () => {
  const instagramUrl = "https://www.instagram.com/charisrex.clothing?igsh=MXZnOXJob2t6MzgyNA%3D%3D&utm_source=qr";

  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-button"
      aria-label="Follow us on Instagram"
    >
      <Instagram size={28} />
    </a>
  );
};

export default FloatingInstagramButton;

