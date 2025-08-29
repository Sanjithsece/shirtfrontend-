import React from 'react';
import ProductCard from './ProductCard';

// --- All Images Imported ---
import tshirt1Front from '../images/IMG_4627.jpg';
import tshirt1Back from '../images/IMG_4628.jpg';
import tshirt2Front from '../images/IMG_4629.jpg';
import tshirt2Back from '../images/IMG_4630.jpg';
import tshirt3Front from '../images/IMG_4631.jpg';
import tshirt3Back from '../images/IMG_4632.jpg';
import tshirt4Front from '../images/IMG_4633.jpg';
import tshirt4Back from '../images/IMG_4634.jpg';
import tshirt5Front from '../images/IMG_4635.jpg';
import tshirt5Back from '../images/IMG_4636.jpg';
import tshirt6Front from '../images/IMG_4637.jpg';
import tshirt6Back from '../images/IMG_4638.jpg';
import tshirt7Front from '../images/IMG_4639.jpg';
import tshirt7Back from '../images/IMG_4640.jpg';
import tshirt8Front from '../images/IMG_4641.jpg';
import tshirt8Back from '../images/IMG_4642.jpg';
import tshirt9Front from '../images/IMG_3753.jpg';
import tshirt9Back from '../images/IMG_3754.jpg';
import tshirt10Front from '../images/IMG_3755.jpg';
import tshirt10Back from '../images/IMG_3756.jpg';
import tshirt11Front from '../images/IMG_3757.jpg';
import tshirt11Back from '../images/IMG_3758.jpg';
import tshirt12Front from '../images/IMG_3759.jpg';
import tshirt12Back from '../images/IMG_3760.jpg';
import tshirt13Front from '../images/IMG_3761.jpg';
import tshirt13Back from '../images/IMG_3762.jpg';
import tshirt14Front from '../images/IMG_3777.jpg'; // Single view
import tshirt15Front from '../images/IMG_3778.jpg';
import tshirt15Back from '../images/IMG_3779.jpg';
import tshirt16Front from '../images/IMG_3782.jpg';
import tshirt16Back from '../images/IMG_3783.jpg';
import tshirt17Front from '../images/IMG_3809.jpg';
import tshirt17Back from '../images/IMG_3810.jpg';
import tshirt18Front from '../images/IMG_3927.jpg';
import tshirt18Back from '../images/IMG_3928.jpg';
import tshirt19Front from '../images/IMG_5443.jpg';
import tshirt19Back from '../images/IMG_5444.jpg';
import tshirt20Front from '../images/IMG_5445.jpg';
import tshirt20Back from '../images/IMG_5446.jpg';
import tshirt21Front from '../images/IMG_5447.jpg';
import tshirt21Back from '../images/IMG_5448.jpg';
import tshirt22Front from '../images/IMG_5449.jpg';
import tshirt22Back from '../images/IMG_5450.jpg';
import tshirt23Front from '../images/IMG_5451.jpg';
import tshirt23Back from '../images/IMG_5452.jpg';
import tshirt24Front from '../images/IMG_5453.jpg';
import tshirt24Back from '../images/IMG_5454.jpg';
import tshirt25Front from '../images/IMG_5455.jpg'; // Single view
import tshirt26Front from '../images/IMG_5456.jpg'; // Single view
import tshirt27Front from '../images/IMG_5457.jpg'; // Single view
import tshirt28Front from '../images/IMG_5458.jpg';
import tshirt28Back from '../images/IMG_5459.jpg';
import tshirt29Front from '../images/IMG_5460.jpg';
import tshirt29Back from '../images/IMG_5461.jpg';
import tshirt30Front from '../images/IMG_5462.jpg';
import tshirt30Back from '../images/IMG_5463.jpg';
import tshirt31Front from '../images/IMG_5464.jpg';
import tshirt31Back from '../images/IMG_5465.jpg';
import tshirt32Front from '../images/IMG_5466.jpg';
import tshirt32Back from '../images/IMG_5467.jpg';
import tshirt33Front from '../images/IMG_5468.jpg';
import tshirt33Back from '../images/IMG_5469.jpg';
import tshirt34Front from '../images/IMG_5470.jpg';
import tshirt34Back from '../images/IMG_5471.jpg';
import tshirt35Front from '../images/IMG_5472.jpg';
import tshirt35Back from '../images/IMG_5473.jpg';


const products = [
  { id: 1, name: 'Man United \'07-\'08 Home', price: '₹329', imageUrl: tshirt1Front, imageUrlBack: tshirt1Back, alt: 'Ronaldo 7 Jersey' },
  { id: 2, name: 'Barcelona \'13-\'14 Home', price: '₹329', imageUrl: tshirt2Front, imageUrlBack: tshirt2Back, alt: 'Barcelona Home Kit' },
  { id: 3, name: 'Argentina \'22 Home', price: '₹329', imageUrl: tshirt3Front, imageUrlBack: tshirt3Back, alt: 'Argentina World Cup Jersey' },
  { id: 4, name: 'AC Milan \'06-\'07 Away', price: '₹329', imageUrl: tshirt4Front, imageUrlBack: tshirt4Back, alt: 'Maldini 3 Retro Jersey' },
  { id: 5, name: 'PSG \'22-\'23 Away', price: '₹329', imageUrl: tshirt5Front, imageUrlBack: tshirt5Back, alt: 'PSG Away Kit' },
  { id: 6, name: 'Germany \'14 Away', price: '₹329', imageUrl: tshirt6Front, imageUrlBack: tshirt6Back, alt: 'Germany Away Kit' },
  { id: 7, name: 'Barcelona \'22-\'23 Away', price: '₹329', imageUrl: tshirt7Front, imageUrlBack: tshirt7Back, alt: 'Barcelona Spotify Kit' },
  { id: 8, name: 'England \'02-\'04 Home', price: '₹379', imageUrl: tshirt8Front, imageUrlBack: tshirt8Back, alt: 'England Retro Kit' },
  { id: 9, name: 'Inter Milan \'07-\'08 Away', price: '₹379', imageUrl: tshirt9Front, imageUrlBack: tshirt9Back, alt: 'Inter Milan Away Kit' },
  { id: 10, name: 'Real Madrid \'06-\'07 Home', price: '₹379', imageUrl: tshirt10Front, imageUrlBack: tshirt10Back, alt: 'Real Madrid Home Kit' },
  { id: 11, name: 'Real Madrid \'06-\'07 Away', price: '₹379', imageUrl: tshirt11Front, imageUrlBack: tshirt11Back, alt: 'Real Madrid Away Kit' },
  { id: 12, name: 'Real Madrid \'11-\'12 Home', price: '₹379', imageUrl: tshirt12Front, imageUrlBack: tshirt12Back, alt: 'Real Madrid Home Kit' },
  { id: 13, name: 'Man United \'08-\'09 Away', price: '₹379', imageUrl: tshirt13Front, imageUrlBack: tshirt13Back, alt: 'Man United Away Kit' },
  { id: 14, name: 'France \'98 Home', price: '₹379', imageUrl: tshirt14Front, imageUrlBack: tshirt14Front, alt: 'France 98 Home Kit' },
  { id: 15, name: 'Netherlands \'88 Home', price: '₹329', imageUrl: tshirt15Front, imageUrlBack: tshirt15Back, alt: 'Netherlands 88 Home Kit' },
  { id: 16, name: 'Real Madrid \'14-\'15 3rd', price: '₹329', imageUrl: tshirt16Front, imageUrlBack: tshirt16Back, alt: 'Real Madrid 3rd Kit' },
  { id: 17, name: 'Man City \'22-\'23 Away', price: '₹329', imageUrl: tshirt17Front, imageUrlBack: tshirt17Back, alt: 'Man City Away Kit' },
  { id: 18, name: 'AC Milan \'95-\'96 Home', price: '₹329', imageUrl: tshirt18Front, imageUrlBack: tshirt18Back, alt: 'AC Milan Home Kit' },
  { id: 19, name: 'Chelsea \'05-\'06 Home', price: '₹379', imageUrl: tshirt19Front, imageUrlBack: tshirt19Back, alt: 'Chelsea Home Kit' },
  { id: 20, name: 'Portugal \'06 Home', price: '₹329', imageUrl: tshirt20Front, imageUrlBack: tshirt20Back, alt: 'Portugal Home Kit' },
  { id: 21, name: 'Germany \'90 Home', price: '₹379', imageUrl: tshirt21Front, imageUrlBack: tshirt21Back, alt: 'Germany Home Kit' },
  { id: 22, name: 'Real Madrid \'13-\'14 Away', price: '₹329', imageUrl: tshirt22Front, imageUrlBack: tshirt22Back, alt: 'Real Madrid Away Kit' },
  { id: 23, name: 'France \'06 Home', price: '₹329', imageUrl: tshirt23Front, imageUrlBack: tshirt23Back, alt: 'France Home Kit' },
  { id: 24, name: 'France \'11-\'12 Away', price: '₹329', imageUrl: tshirt24Front, imageUrlBack: tshirt24Back, alt: 'France Away Kit' },
  { id: 25, name: 'Brazil \'02 Home', price: '₹329', imageUrl: tshirt25Front, imageUrlBack: tshirt25Front, alt: 'Brazil Home Kit' },
  { id: 26, name: 'Inter Miami \'23-\'24 Home', price: '₹379', imageUrl: tshirt26Front, imageUrlBack: tshirt26Front, alt: 'Inter Miami Home Kit' },
  { id: 27, name: 'Argentina \'94 Away', price: '₹329', imageUrl: tshirt27Front, imageUrlBack: tshirt27Front, alt: 'Argentina Away Kit' },
  { id: 28, name: 'Man City \'11-\'12 Home', price: '₹379', imageUrl: tshirt28Front, imageUrlBack: tshirt28Back, alt: 'Man City Home Kit' },
  { id: 29, name: 'Arsenal \'05-\'06 Home', price: '₹329', imageUrl: tshirt29Front, imageUrlBack: tshirt29Back, alt: 'Arsenal Home Kit' },
  { id: 30, name: 'Liverpool \'08-\'09 Away', price: '₹329', imageUrl: tshirt30Front, imageUrlBack: tshirt30Back, alt: 'Liverpool Away Kit' },
  { id: 31, name: 'Barcelona \'08-\'09 Home', price: '₹329', imageUrl: tshirt31Front, imageUrlBack: tshirt31Back, alt: 'Barcelona Home Kit' },
  { id: 32, name: 'Dortmund \'12-\'13 Home', price: '₹329', imageUrl: tshirt32Front, imageUrlBack: tshirt32Back, alt: 'Dortmund Home Kit' },
  { id: 33, name: 'Dortmund \'13-\'14 CL', price: '₹329', imageUrl: tshirt33Front, imageUrlBack: tshirt33Back, alt: 'Dortmund CL Kit' },
  { id: 34, name: 'Chelsea \'12-\'13 Home', price: '₹329', imageUrl: tshirt34Front, imageUrlBack: tshirt34Back, alt: 'Chelsea Home Kit' },
  { id: 35, name: 'Liverpool \'06-\'07 Home', price: '₹329', imageUrl: tshirt35Front, imageUrlBack: tshirt35Back, alt: 'Liverpool Home Kit' },
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