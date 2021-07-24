import { ActionTypes } from '../constants/actionTypes';

//action type set coin
export const setCoin = (coins) => {
  return {
    type: ActionTypes.SET_COIN,
    payload: coins
  };
};

//action type coindetails
export const coinDetails = (coin) => {
  return {
    type: ActionTypes.COIN_DETAILS,
    payload: coin
  };
};

//action type add to cart
export const addToCart = (id) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    id: id
  };
};
