import React from 'react';
import AllCards from '../AllCards';
import Hero from '../Hero';
import NewsSection from '../NewsSection';

function Home({ slicedCoin }) {
  return (
    <>
      <Hero />
      <AllCards slicedCoin={slicedCoin} />
      <NewsSection />
    </>
  );
}

export default Home;
