import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import FeaturedProducts from './components/featuredproducts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;
