import React from 'react';
import BigCard from '../news/BigCard';
import Smallcard from '../news/Smallcard';
import requests from '../api/newsRequest';
import NewsULelement from '../NewsULelement';

function News({ setSelectedOption, slicedNews, slicedNews1 }) {
  return (
    <>
      <NewsULelement
        requests={requests}
        setSelectedOption={setSelectedOption}
      />
      <BigCard
        setSelectedOption={setSelectedOption}
        slicedNews={slicedNews}
        requests={requests}
      />
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '5%' }}>
        Top Stories
      </h2>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%'
        }}
      >
        <Smallcard slicedNews1={slicedNews1} />
      </div>
    </>
  );
}

export default News;
