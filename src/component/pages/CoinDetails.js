import React from 'react';
import { useParams } from 'react-router-dom';

function CoinDetails({ coinData }) {
  const { coinId } = useParams();

  //filter the clicked link id from the all coin
  var searchResult = coinData.filter((coin) => coin.id === coinId, [0]);
  console.log(searchResult);

  return (
    <div>
      <h2>{searchResult[0].name}</h2>
    </div>
  );
}

export default CoinDetails;
