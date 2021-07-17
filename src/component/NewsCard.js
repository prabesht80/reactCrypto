import React from 'react';
// import './NewsCard.css';
// import propTypes from 'prop-types';
import image from './assets/images/bitcoin1.svg';

function NewsCard() {
  return (
    <div>
      <div className="one">
        <img className="photo1" src={image} alt="#" />
        <div className="word1">
          <h3>
            Leverage token now available
            <button> Learn more </button>
          </h3>
          <p>Good thing come in 3s levereged token now</p>
        </div>
      </div>
      <div className="two">
        <div className="word2">
          <h3> Leverage token now available</h3>
          <p>Good thing come in 3s levereged token now.</p>
        </div>
        <img className="photo2" src={image} alt="#" />
      </div>
      <div className="three">
        <div className="word2">
          <h3>Leverage token now available</h3>
          <p>Good thing come in 3s levereged token now.</p>
        </div>
        <img className="photo2" src={image} alt="#" />
      </div>
      <div className="four">
        <div className="word2">
          <h3>Leverage token now available</h3>
          <p>Good thing come in 3s levereged token now.</p>
        </div>
        <img className="photo2" src={image} alt="#" />
      </div>
    </div>
  );
}

// NewsCard.propTypes = {
//   news: propTypes.oneOfType(
//     propTypes.string,
//     propTypes.number,
//     propTypes.object
//   ),
//   index: propTypes.number
// };

export default NewsCard;
