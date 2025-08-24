import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Classic Crew Neck',
    price: '$24.99',
    imageUrl: 'https://placehold.co/600x800/2D3748/FFFFFF?text=T-Shirt+1',
    alt: 'Classic Crew Neck T-Shirt',
  },
  {
    id: 2,
    name: 'Vintage Graphic Tee',
    price: '$29.99',
    imageUrl: 'https://placehold.co/600x800/4A5568/FFFFFF?text=T-Shirt+2',
    alt: 'Vintage Graphic T-Shirt',
  },
  {
    id: 3,
    name: 'Modern V-Neck',
    price: '$26.99',
    imageUrl: 'https://placehold.co/600x800/718096/FFFFFF?text=T-Shirt+3',
    alt: 'Modern V-Neck T-Shirt',
  },
  {
    id: 4,
    name: 'Urban Street Style',
    price: '$32.99',
    imageUrl: 'https://placehold.co/600x800/A0AEC0/FFFFFF?text=T-Shirt+4',
    alt: 'Urban Street Style T-Shirt',
  },
  {
    id: 5,
    name: 'Eco-Friendly Cotton',
    price: '$28.99',
    imageUrl: 'https://placehold.co/600x800/CBD5E0/2D3748?text=T-Shirt+5',
    alt: 'Eco-Friendly Cotton T-Shirt',
  },
  {
    id: 6,
    name: 'Minimalist Design',
    price: '$25.99',
    imageUrl: 'https://placehold.co/600x800/E2E8F0/2D3748?text=T-Shirt+6',
    alt: 'Minimalist Design T-Shirt',
  },
  {
    id: 7,
    name: 'Henley Long Sleeve',
    price: '$34.99',
    imageUrl: 'https://placehold.co/600x800/4FD1C5/FFFFFF?text=T-Shirt+7',
    alt: 'Henley Long Sleeve',
  },
  {
    id: 8,
    name: 'Striped Pocket Tee',
    price: '$27.99',
    imageUrl: 'https://placehold.co/600x800/F6E05E/2D3748?text=T-Shirt+8',
    alt: 'Striped Pocket Tee',
  },
  {
    id: 9,
    name: 'Ringer T-Shirt',
    price: '$26.99',
    imageUrl: 'https://placehold.co/600x800/F56565/FFFFFF?text=T-Shirt+9',
    alt: 'Ringer T-Shirt',
  },
  {
    id: 10,
    name: 'Slub Knit Tee',
    price: '$31.99',
    imageUrl: 'https://placehold.co/600x800/63B3ED/FFFFFF?text=T-Shirt+10',
    alt: 'Slub Knit Tee',
  },
  {
    id: 11,
    name: 'Tri-Blend Crew',
    price: '$29.99',
    imageUrl: 'https://placehold.co/600x800/76E4F7/2D3748?text=T-Shirt+11',
    alt: 'Tri-Blend Crew',
  },
  {
    id: 12,
    name: 'Heavyweight Tee',
    price: '$35.99',
    imageUrl: 'https://placehold.co/600x800/B794F4/FFFFFF?text=T-Shirt+12',
    alt: 'Heavyweight Tee',
  },
  {
    id: 13,
    name: 'Performance Dry-Fit',
    price: '$39.99',
    imageUrl: 'https://placehold.co/600x800/F687B3/FFFFFF?text=T-Shirt+13',
    alt: 'Performance Dry-Fit',
  },
  {
    id: 14,
    name: 'Faded Wash Tee',
    price: '$33.99',
    imageUrl: 'https://placehold.co/600x800/A0AEC0/FFFFFF?text=T-Shirt+14',
    alt: 'Faded Wash Tee',
  },
  {
    id: 15,
    name: 'Raglan Sleeve Tee',
    price: '$30.99',
    imageUrl: 'https://placehold.co/600x800/ED8936/FFFFFF?text=T-Shirt+15',
    alt: 'Raglan Sleeve Tee',
  },
  {
    id: 16,
    name: 'Embroidered Logo Tee',
    price: '$36.99',
    imageUrl: 'https://placehold.co/600x800/48BB78/FFFFFF?text=T-Shirt+16',
    alt: 'Embroidered Logo Tee',
  },
  {
    id: 17,
    name: 'Tie-Dye Swirl',
    price: '$38.99',
    imageUrl: 'https://placehold.co/600x800/9F7AEA/FFFFFF?text=T-Shirt+17',
    alt: 'Tie-Dye Swirl',
  },
  {
    id: 18,
    name: 'Scoop Neck Tee',
    price: '$25.99',
    imageUrl: 'https://placehold.co/600x800/ECC94B/2D3748?text=T-Shirt+18',
    alt: 'Scoop Neck Tee',
  },
  {
    id: 19,
    name: 'Linen Blend T-Shirt',
    price: '$42.99',
    imageUrl: 'https://placehold.co/600x800/4299E1/FFFFFF?text=T-Shirt+19',
    alt: 'Linen Blend T-Shirt',
  },
  {
    id: 20,
    name: 'Boxy Fit Tee',
    price: '$31.99',
    imageUrl: 'https://placehold.co/600x800/38B2AC/FFFFFF?text=T-Shirt+20',
    alt: 'Boxy Fit Tee',
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

