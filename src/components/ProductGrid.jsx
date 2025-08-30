import React from 'react';
import ProductCard from './ProductCard';

// --- All Images Imported and Correctly Paired ---
// --- Double View Jerseys ---
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
import tshirt14Front from '../images/IMG_3778.jpg';
import tshirt14Back from '../images/IMG_3779.jpg';
import tshirt15Front from '../images/IMG_3782.jpg';
import tshirt15Back from '../images/IMG_3783.jpg';
import tshirt16Front from '../images/IMG_3809.jpg';
import tshirt16Back from '../images/IMG_3810.jpg';
import tshirt17Front from '../images/IMG_5443.jpg';
import tshirt17Back from '../images/IMG_5485.jpg';
import tshirt18Front from '../images/IMG_5444.jpg';
import tshirt18Back from '../images/IMG_5445.jpg';
import tshirt19Front from '../images/IMG_5446.jpg';
import tshirt19Back from '../images/IMG_5447.jpg';
import tshirt20Front from '../images/IMG_5448.jpg';
import tshirt20Back from '../images/IMG_5449.jpg';
import tshirt21Front from '../images/IMG_5450.jpg';
import tshirt21Back from '../images/IMG_5451.jpg';
import tshirt23Front from '../images/IMG_5458.jpg';
import tshirt23Back from '../images/IMG_5459.jpg';
import tshirt24Front from '../images/IMG_5460.jpg';
import tshirt24Back from '../images/IMG_5461.jpg';
import tshirt25Front from '../images/IMG_5462.jpg';
import tshirt25Back from '../images/IMG_5463.jpg';
import tshirt26Front from '../images/IMG_5464.jpg';
import tshirt26Back from '../images/IMG_5465.jpg';
import tshirt27Front from '../images/IMG_5466.jpg';
import tshirt27Back from '../images/IMG_5467.jpg';
import tshirt28Front from '../images/IMG_5468.jpg';
import tshirt28Back from '../images/IMG_5469.jpg';
import tshirt29Front from '../images/IMG_5470.jpg';
import tshirt29Back from '../images/IMG_5471.jpg';
import tshirt30Front from '../images/IMG_5472.jpg';
import tshirt30Back from '../images/IMG_5473.jpg';
import tshirt31Front from '../images/IMG_5474.jpg';
import tshirt31Back from '../images/IMG_5475.jpg';
import tshirt32Front from '../images/IMG_5476.jpg';
import tshirt32Back from '../images/IMG_5477.jpg';
import tshirt33Front from '../images/IMG_5478.jpg';
import tshirt33Back from '../images/IMG_5479.jpg';
import tshirt34Front from '../images/IMG_5480.jpg';
import tshirt34Back from '../images/IMG_5481.jpg';
import tshirt35Front from '../images/IMG_5482.jpg';
import tshirt35Back from '../images/IMG_5483.jpg';
import tshirt36Front from '../images/IMG_5486.jpg';
import tshirt36Back from '../images/IMG_5487.jpg';

// --- Single View Jerseys ---
import tshirtSingle1 from '../images/IMG_3777.jpg';
import tshirtSingle2 from '../images/IMG_3927.jpg';
import tshirtSingle4 from '../images/IMG_5452.jpg';
import tshirtSingle5 from '../images/IMG_5455.jpg';
import tshirtSingle6 from '../images/IMG_5456.jpg';
import tshirtSingle7 from '../images/IMG_5457.jpg';

const products = [

  { id: 1, name: 'Man United \'07-\'08 Home', price: '₹329', imageUrl: tshirt1Front, imageUrlBack: tshirt1Back, alt: 'Ronaldo 7 Jersey' },
  { id: 2, name: 'Barcelona \'13-\'14 Home', price: '₹329', imageUrl: tshirt2Front, imageUrlBack: tshirt2Back, alt: 'Barcelona Messi 10 Kit' },
  { id: 3, name: 'Argentina \'22 Home', price: '₹329', imageUrl: tshirt3Front, imageUrlBack: tshirt3Back, alt: 'Argentina World Cup Jersey' },
  { id: 4, name: 'AC Milan \'06-\'07 Away', price: '₹329', imageUrl: tshirt4Front, imageUrlBack: tshirt4Back, alt: 'Maldini 3 Retro Jersey' },
  { id: 5, name: 'PSG \'22-\'23 Away', price: '₹329', imageUrl: tshirt5Front, imageUrlBack: tshirt5Back, alt: 'PSG Neymar 10 Kit' },
  { id: 6, name: 'Germany \'14 Away', price: '₹329', imageUrl: tshirt6Front, imageUrlBack: tshirt6Back, alt: 'Germany Özil 8 Kit' },
  { id: 7, name: 'Barcelona \'22-\'23 Away', price: '₹329', imageUrl: tshirt7Front, imageUrlBack: tshirt7Back, alt: 'Barcelona Lewandowski 10 Kit' },
  { id: 8, name: 'England \'02-\'04 Home', price: '₹379', imageUrl: tshirt8Front, imageUrlBack: tshirt8Back, alt: 'England Beckham 7 Retro Kit' },
  { id: 9, name: 'AC Milan \'10-\'11 Home', price: '₹379', imageUrl: tshirt9Front, imageUrlBack: tshirt9Back, alt: 'AC Milan Ronaldinho 80 Kit' },
  { id: 10, name: 'Real Madrid \'06-\'07 Home', price: '₹329', imageUrl: tshirt10Front, imageUrlBack: tshirt10Back, alt: 'Real Madrid Ronaldo 7 Kit' },
  { id: 11, name: 'Real Madrid \'07-\'08 Away', price: '₹379', imageUrl: tshirt11Front, imageUrlBack: tshirt11Back, alt: 'Real Madrid Ronaldo 7 Away Kit' },
  { id: 12, name: 'Real Madrid \'11-\'12 Home', price: '₹329', imageUrl: tshirt12Front, imageUrlBack: tshirt12Back, alt: 'Real Madrid Özil 10 Kit' },
  { id: 13, name: 'Man United \'08-\'09 Away', price: '₹329', imageUrl: tshirt13Front, imageUrlBack: tshirt13Back, alt: 'Man United Ronaldo 7 Away Kit' },
  { id: 14, name: 'Netherlands \'88 Home', price: '₹379', imageUrl: tshirt14Front, imageUrlBack: tshirt14Back, alt: 'Netherlands Gullit Retro Kit' },
  { id: 15, name: 'Real Madrid \'14-\'15 3rd', price: '₹329', imageUrl: tshirt15Front, imageUrlBack: tshirt15Back, alt: 'Real Madrid Dragon 3rd Kit' },
  { id: 16, name: 'Man City \'22-\'23 Away', price: '₹329', imageUrl: tshirt16Front, imageUrlBack: tshirt16Back, alt: 'Man City Haaland 9 Kit' },
  { id: 17, name: 'Liverpool \'08-\'09 Away', price: '₹329', imageUrl: tshirt17Back, imageUrlBack: tshirt17Front, alt: 'Liverpool Gerrard 8 Black Kit' },
  { id: 18, name: 'Liverpool \'08-\'09 Away', price: '₹329', imageUrl: tshirt18Front, imageUrlBack: tshirt18Back, alt: 'Liverpool Gerrard 8 White Kit' },
  { id: 19, name: 'Portugal \'06 Home', price: '₹329', imageUrl: tshirt19Front, imageUrlBack: tshirt19Back, alt: 'Portugal Figo 7 Kit' },
  { id: 20, name: 'Germany \'90 Home', price: '₹329', imageUrl: tshirt20Front, imageUrlBack: tshirt20Back, alt: 'Germany Klinsmann 8 Kit' },
  { id: 21, name: 'Real Madrid \'13-\'14 Away', price: '₹329', imageUrl: tshirt21Back, imageUrlBack: tshirt21Front, alt: 'Real Madrid Mbappe 10 Kit' },
  { id: 23, name: 'Man City \'11-\'12 Home', price: '₹379', imageUrl: tshirt23Back, imageUrlBack: tshirt23Front, alt: 'Man City Home Kit' },
  { id: 24, name: 'Chelsea \'03-\'05 Away', price: '₹329', imageUrl: tshirt24Front, imageUrlBack: tshirt24Back, alt: 'Chelsea Away Kit' },
  { id: 25, name: 'AC Milan \'08-\'09 Home', price: '₹329', imageUrl: tshirt25Back, imageUrlBack: tshirt25Front, alt: 'AC Milan Home Kit' },
  { id: 26, name: 'Juventus \'15-\'16 Home', price: '₹329', imageUrl: tshirt26Front, imageUrlBack: tshirt26Back, alt: 'Juventus Dybala 10 Kit' },
  { id: 27, name: 'Dortmund \'12-\'13 Home', price: '₹379', imageUrl: tshirt27Back, imageUrlBack: tshirt27Front, alt: 'Dortmund Reus Kit' },
  { id: 28, name: 'Dortmund \'13-\'14 CL', price: '₹379', imageUrl: tshirt28Back, imageUrlBack: tshirt28Front, alt: 'Dortmund CL Kit' },
  { id: 29, name: 'Real Madrid \'03-\'04 Home', price: '₹379', imageUrl: tshirt29Back, imageUrlBack: tshirt29Front, alt: 'Real Madrid Raul 7 Kit' },
  { id: 30, name: 'Man United \'02-\'04 3rd', price: '₹379', imageUrl: tshirt30Back, imageUrlBack: tshirt30Front, alt: 'Man United Beckham 7 Kit' },
  { id: 31, name: 'Man United \'06-\'07 Home', price: '₹329', imageUrl: tshirt31Back, imageUrlBack: tshirt31Front, alt: 'Man United Ronaldo 7 Kit' },
  { id: 32, name: 'Barcelona \'10-\'11 Home', price: '₹329', imageUrl: tshirt32Back, imageUrlBack: tshirt32Front, alt: 'Barcelona Messi 10 Kit' },
  { id: 33, name: 'Real Madrid \'16-\'17 Home', price: '₹329', imageUrl: tshirt33Back, imageUrlBack: tshirt33Front, alt: 'Real Madrid Modric 10 Kit' },
  { id: 34, name: 'Chelsea \'06-\'08 Home', price: '₹329', imageUrl: tshirt34Back, imageUrlBack: tshirt34Front, alt: 'Chelsea Drogba 11 Kit' },
  { id: 35, name: 'Man United \'08-\'09 Home', price: '₹329', imageUrl: tshirt35Back, imageUrlBack: tshirt35Front, alt: 'Man United Ronaldo 7 Kit' },
  { id: 36, name: 'PSG \'18-\'19 Home', price: '₹329', imageUrl: tshirt36Back, imageUrlBack: tshirt36Front, alt: 'PSG Home Kit' },
    { id: 42, name: 'PSG \'18-\'19 Away', price: '₹329', imageUrl: tshirtSingle6, imageUrlBack: tshirtSingle5, alt: 'PSG Away Kit' },


  // --- Jerseys with Single View (Moved to the end) ---
  { id: 37, name: 'France \'98 Home', price: '₹379', imageUrl: tshirtSingle1, imageUrlBack: tshirtSingle1, alt: 'France 98 Zidane 10 Kit' },
  { id: 38, name: 'AC Milan \'95-\'96 Home', price: '₹329', imageUrl: tshirtSingle2, imageUrlBack: tshirtSingle2, alt: 'AC Milan Home Kit' },
  { id: 40, name: 'Real Madrid \'11-\'12 Away', price: '₹329', imageUrl: tshirtSingle4, imageUrlBack: tshirtSingle4, alt: 'Real Madrid Away Kit' },
  { id: 43, name: 'Argentina \'94 Away', price: '₹379', imageUrl: tshirtSingle7, imageUrlBack: tshirtSingle7, alt: 'Argentina Away Kit' },
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