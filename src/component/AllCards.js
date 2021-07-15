import React from 'react';
import './AllCards.css';
import Card from './Card';

function AllCards() {
  return (
    <div className="cards-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default AllCards;
