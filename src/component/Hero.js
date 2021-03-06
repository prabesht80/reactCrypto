import React from 'react';
import './styles/Hero.css';
import Bitcoin from './assets/images/bitcoin.svg';
import Cart from './Cart';

function Hero() {
  return (
    <>
      <Cart />

      <div className="hero-container">
        {/* hero text */}
        <div className="column">
          <h2>Buy & sell crypto in minutes</h2>
          <p>
            Trade Bitcoin, Ethereum,Dogecoin, and the top altcoin on the
            legendary crypto asset exchange
          </p>
          <button>Get Started Now</button>
        </div>
        {/* hero image */}
        <div className="column">
          <img src={Bitcoin} alt="#" />
        </div>
      </div>
    </>
  );
}

export default Hero;
