import React from 'react';
import ProductCard from './ProductCard';

// --- All 28 Images Imported ---
import tshirt1Front from '../images/IMG_4627.jpg'; // Ronaldo
import tshirt1Back from '../images/IMG_4628.jpg';
import tshirt2Front from '../images/IMG_4629.jpg'; // Barcelona
import tshirt2Back from '../images/IMG_4630.jpg';
import tshirt3Front from '../images/IMG_4631.jpg'; // Argentina
import tshirt3Back from '../images/IMG_4632.jpg';
import tshirt4Front from '../images/IMG_4633.jpg'; // Maldini
import tshirt4Back from '../images/IMG_4634.jpg';
import tshirt5Front from '../images/IMG_4635.jpg'; // PSG
import tshirt5Back from '../images/IMG_4636.jpg';
import tshirt6Front from '../images/IMG_4637.jpg'; // Germany
import tshirt6Back from '../images/IMG_4638.jpg';
import tshirt7Front from '../images/IMG_4639.jpg'; // Barcelona Spotify
import tshirt7Back from '../images/IMG_4640.jpg';
import tshirt8Front from '../images/IMG_4641.jpg'; // England
import tshirt8Back from '../images/IMG_4642.jpg';
import tshirt9Front from '../images/IMG_3753.jpg'; // Inter Milan
import tshirt9Back from '../images/IMG_3754.jpg';
import tshirt10Front from '../images/IMG_3755.jpg'; // Real Madrid
import tshirt10Back from '../images/IMG_3756.jpg';
import tshirt11Front from '../images/IMG_3757.jpg'; // Real Madrid Away
import tshirt11Back from '../images/IMG_3758.jpg';
import tshirt12Front from '../images/IMG_3759.jpg'; // Real Madrid 3rd
import tshirt12Back from '../images/IMG_3760.jpg';
import tshirt13Front from '../images/IMG_3761.jpg'; // Man United Away
import tshirt13Back from '../images/IMG_3762.jpg';
import tshirt14Front from '../images/IMG_3777.jpg'; // France '98

// --- Product List Expanded to 14 T-Shirts ---
const products = [
  {
    id: 1,
    name: 'Man United \'07-\'08 Home',
    price: '₹329', // Normal
    imageUrl: tshirt1Front,
    imageUrlBack: tshirt1Back,
    alt: 'Ronaldo 7 Jersey',
  },
  {
    id: 2,
    name: 'Barcelona \'13-\'14 Home',
    price: '₹329', // Normal
    imageUrl: tshirt2Front,
    imageUrlBack: tshirt2Back,
    alt: 'Barcelona Home Kit',
  },
  {
    id: 3,
    name: 'Argentina \'22 Home',
    price: '₹329', // Normal
    imageUrl: tshirt3Front,
    imageUrlBack: tshirt3Back,
    alt: 'Argentina World Cup Jersey',
  },
  {
    id: 4,
    name: 'AC Milan \'06-\'07 Away',
    price: '₹329', // Normal
    imageUrl: tshirt4Front,
    imageUrlBack: tshirt4Back,
    alt: 'Maldini 3 Retro Jersey',
  },
  {
    id: 5,
    name: 'PSG \'22-\'23 Away',
    price: '₹329', // Normal
    imageUrl: tshirt5Front,
    imageUrlBack: tshirt5Back,
    alt: 'PSG Away Kit',
  },
  {
    id: 6,
    name: 'Germany \'14 Away',
    price: '₹329', // Normal
    imageUrl: tshirt6Front,
    imageUrlBack: tshirt6Back,
    alt: 'Germany Away Kit',
  },
  {
    id: 7,
    name: 'Barcelona \'22-\'23 Away',
    price: '₹329', // Normal
    imageUrl: tshirt7Front,
    imageUrlBack: tshirt7Back,
    alt: 'Barcelona Spotify Kit',
  },
  {
    id: 8,
    name: 'England \'02-\'04 Home',
    price: '₹379', // Collar
    imageUrl: tshirt8Front,
    imageUrlBack: tshirt8Back,
    alt: 'England Retro Kit',
  },
  {
    id: 9,
    name: 'Inter Milan \'07-\'08 Away',
    price: '₹379', // Collar
    imageUrl: tshirt9Front,
    imageUrlBack: tshirt9Back,
    alt: 'Inter Milan Away Kit',
  },
  {
    id: 10,
    name: 'Real Madrid \'06-\'07 Home',
    price: '₹329', // Collar
    imageUrl: tshirt10Front,
    imageUrlBack: tshirt10Back,
    alt: 'Real Madrid Home Kit',
  },
  {
    id: 11,
    name: 'Real Madrid \'06-\'07 Away',
    price: '₹379', // Collar
    imageUrl: tshirt11Front,
    imageUrlBack: tshirt11Back,
    alt: 'Real Madrid Away Kit',
  },
  {
    id: 12,
    name: 'Real Madrid \'11-\'12 Home',
    price: '₹329', // Collar
    imageUrl: tshirt12Front,
    imageUrlBack: tshirt12Back,
    alt: 'Real Madrid Home Kit',
  },
  {
    id: 13,
    name: 'Man United \'08-\'09 Away',
    price: '₹379', // Collar
    imageUrl: tshirt13Front,
    imageUrlBack: tshirt13Back,
    alt: 'Man United Away Kit',
  },
  {
    id: 14,
    name: 'France \'98 Home',
    price: '₹379', // Collar
    imageUrl: tshirt14Front,
    imageUrlBack: tshirt14Front, // Using front image again as no back is available
    alt: 'France 98 Home Kit',
  },
];

const ProductGrid = () => (
  <div className="container product-grid-container">
    <h2 className="product-grid-title">Our Latest Collection</h2>
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductGrid;
