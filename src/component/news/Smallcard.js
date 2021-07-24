import React from 'react';
import { Link } from 'react-router-dom';
import './Smallcard.css';

function Smallcard({ slicedNews1 }) {
  return (
    <>
      {slicedNews1.map((news) => (
        <>
          <Link to={`/news/${news.author}`}>
            <div className="flip-card" key={news.source.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={news.urlToImage}
                    alt="Avatar"
                    style={{
                      width: '300px',
                      height: '250px',
                      imageFit: 'cover'
                    }}
                  />
                </div>
                <div className="flip-card-back">
                  <h1>{news.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}

export default Smallcard;
