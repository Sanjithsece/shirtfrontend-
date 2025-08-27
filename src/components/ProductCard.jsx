import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isShowingFront, setIsShowingFront] = useState(true);

  // This function will be called when the flip icon is clicked
  const toggleImage = (e) => {
    e.stopPropagation(); // Prevents other click events from firing
    setIsShowingFront(!isShowingFront);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {/* Flip button with icon */}
        <button onClick={toggleImage} className="flip-button" aria-label="Flip image">
          <RefreshCw size={18} />
        </button>

        <img
          src={isShowingFront ? product.imageUrl : product.imageUrlBack}
          alt={product.alt}
          loading="lazy"
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

