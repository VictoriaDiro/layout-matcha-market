import React from 'react';
import Header from '../Header';
import Slider from '../Slider';
import Captions from '../Captions';
import Video from '../Video';
import Products from '../Products';
import FooterBanner from '../FooterBanner';
import Footer from '../Footer';
import './App.css';

function App() {
  return (
  <div className="App">
    <Header />
    <Slider />
    <Captions />
    <Video />
    <Products />
    <FooterBanner />
    <Footer />
  </div>
  );
}

export default App;
