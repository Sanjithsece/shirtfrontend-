import React from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import './index.css'; 

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ProductGrid />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}