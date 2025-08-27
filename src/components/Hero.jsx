import React from 'react';

const Hero = () => {
  // This function scrolls the user down to the product grid
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">The Beautiful Game, Reimagined</h1>
        <p className="hero-subtitle">Discover classic and modern football jerseys that tell a story.</p>
        <button onClick={scrollToProducts} className="hero-button">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;

