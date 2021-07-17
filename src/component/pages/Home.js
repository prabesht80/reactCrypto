import React from 'react';
import AllCards from '../AllCards';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import NewsSection from '../NewsSection';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllCards />
      <NewsSection />
      <Footer />
    </>
  );
}

export default Home;
