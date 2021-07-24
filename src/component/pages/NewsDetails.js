import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function NewsDetails() {
  //get clicked params
  let { newsId } = useParams();

  const [newsDetails, setNewsDetails] = useState([]);

  //get newsId matching response
  useEffect(() => {
    async function newsRequest() {
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?sources=${newsId}&apiKey=41fa0658264b4a6491a1ef2a166ed53c`
        )
        .then((res) => res.data.articles)
        .then(setNewsDetails);
    }
    newsRequest();
  }, [newsId]);

  console.log(newsDetails);

  return (
    <div>
      {/* {findNews.map((news) => (
        <div key={newsId}>
          <h3>{news.title}</h3>
        </div>
      ))} */}
    </div>
  );
}

export default NewsDetails;
