import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';

//combining all the reduxers
const reducer = combineReducers({
  cartItems: cartReducer
});

export default reducer;
