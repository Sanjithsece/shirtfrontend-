import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'; // Import the new Hero component
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import FloatingInstagramButton from './components/FloatingInstagramButton';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero /> {/* Add the Hero section here */}
        <section id="products"> {/* Add an ID for the scroll link */}
          <ProductGrid />
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <FloatingInstagramButton />
    </>
  );
}

