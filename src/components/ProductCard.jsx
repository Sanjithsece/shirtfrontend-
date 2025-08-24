import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image-wrapper">
      <img
        src={product.imageUrl}
        alt={product.alt}
        loading="lazy"
        className="product-image"
      />
      <div className="product-card-overlay"></div>
      <button className="quick-view-button">
        Quick View
      </button>
    </div>
    <div className="product-info">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}</p>
    </div>
  </div>
);

export default ProductCard;

