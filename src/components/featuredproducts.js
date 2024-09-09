import React from 'react';

const FeaturedProducts = () => {
  const products = [
    { name: 'Brake Pads', price: 'Ksh 3000', image: 'brake_pads.jpg' },
    { name: 'Engine Oil', price: 'Ksh 1200', image: 'engine_oil.jpg' },
    { name: 'Headlights', price: 'Ksh 7000', image: 'headlights.jpg' },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={`/assets/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
