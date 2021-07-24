import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  numOfItem: 0
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        numOfItem: state.numOfItem + 1
      };
    default:
      return state;
  }
};
