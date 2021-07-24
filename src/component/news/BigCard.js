import React from 'react';
import './BigCard.css';

function BigCard({ slicedNews }) {
  return (
    <>
      {slicedNews.map((news) => (
        <div className="box" key={news.source.id}>
          <img src={news.urlToImage} alt="#" />
          <div className="text">
            <h3 className="title">{news.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default BigCard;
