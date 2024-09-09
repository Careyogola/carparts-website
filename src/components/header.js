import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">JM Kenya</div>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
