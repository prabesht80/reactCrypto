import React, { useEffect, useState } from 'react';
import './styles/NewsSection.css';
import image from './assets/images/bitcoin1.svg';
import requests from '../component/api/newsRequest';
import axios from './api/newsAxios';
import { Link } from 'react-router-dom';
// import NewsCard from './NewsCard';

function NewsSection() {
  // initial request
  const [selectedOption, setSelectedOption] = useState(requests.all);

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(selectedOption);
    const data = await res.data;
    // set articles data to newData
    setNewsData(data.articles);
  };

  console.log(newsData);
  const titles = newsData.map((news) => news.titles);
  console.log(titles);

  return (
    <div className="newsSection-container">
      {/* News Header  */}
      <div className="newsSection-header">
        <h2>Crypto News </h2>
        <Link to="/news">
          <button className="moreNews">View More</button>
        </Link>
      </div>

      {/* News Links */}
      <div className="newsSection-links">
        <ul>
          <li
            onClick={() => {
              setSelectedOption(requests.all);
            }}
          >
            All
          </li>
          <li
            onClick={() => {
              setSelectedOption(requests.bitcoin);
            }}
          >
            Crypto
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

      {/* News Cards */}
      <div className="newsSection">
        <div className="one">
          <img className="photo1" src={image} alt="#" />
          <div className="word1">
            <h3 id="newsTitle">
              {titles[0]}
              {/* <button> Learn more </button> */}
            </h3>
            <p>Good thing come in 3s levereged token now</p>
          </div>
        </div>
        ;
        <div className="two">
          <div className="word2">
            <h3 className="newsTitle"> Leverage token now available</h3>
            <p>Good thing come in 3s levereged token now.</p>
          </div>
          <img className="photo2" src={image} alt="#" />
        </div>
        <div className="three">
          <div className="word2">
            <h3 className="newsTitle">Leverage token now available</h3>
            <p>Good thing come in 3s levereged token now.</p>
          </div>
          <img className="photo2" src={image} alt="#" />
        </div>
        <div className="four">
          <div className="word2">
            <h3 className="newsTitle">Leverage token now available</h3>
            <p>Good thing come in 3s levereged token now.</p>
          </div>
          <img className="photo2" src={image} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
