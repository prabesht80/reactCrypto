import React from 'react';
import './styles/NewsULelement.css';
import requests from './api/newsRequest';

function NewsULelement({ setSelectedOption }) {
  return (
    <div className="newsSection-links">
      <ul>
        <li
          onClick={() => {
            setSelectedOption(requests.all);
          }}
        >
          All
        </li>
        <li>
          <h3
            onClick={() => {
              setSelectedOption(requests.bitcoin);
            }}
          >
            Crypto
          </h3>
        </li>
        <li
          onClick={() => {
            setSelectedOption(requests.blockchain);
          }}
        >
          BlockChain
        </li>
      </ul>
    </div>
  );
}

export default NewsULelement;
