import React from 'react';
import './Hero.css';
import Bitcoin from './assets/images/bitcoin.svg';

function Hero() {
  return (
    <div className="hero-container">
      <div className="column">
        <h2>Buy & sell crypto in minutes</h2>
        <p>
          Trade Bitcoin, Ethereum,Dogecoin, and the top altcoin on the legendary
          crypto asset exchange
        </p>
        <button>Get Started Now</button>
      </div>
      <div className="column">
        <img src={Bitcoin} alt="#" />
      </div>
    </div>
  );
}

export default Hero;
