import { combineReducers } from 'redux';
import {
  INPUT_COIN,
  RETURN_COIN,
  TAKE_COIN,
  BUY_DRINK,
  TAKE_DRINKS
} from './constants';
import { Drinks, MyDrinks, Coins } from './initialState';
import { Actions } from './actions';

const myWallet = (state: Coins = 0, action: Actions) => {
  switch (action.type) {
    case INPUT_COIN: 
      return state - action.coin;
    case TAKE_COIN: 
      return state + action.coin;
    default:
      return state;
  }
};

const availableCoin = (state: Coins = 0, action: Actions) => {
  switch (action.type) {
    case INPUT_COIN: 
      return state + action.coin;
    case RETURN_COIN: 
      return state - action.coin;
    case BUY_DRINK: 
      return state - action.price;
    default:
      return state;
  }
};

const notAvailableCoin = (state: Coins = 0, action: Actions) => {
  switch (action.type) {
    case RETURN_COIN: 
      return state + action.coin;
    case TAKE_COIN: 
      return state - action.coin;
    default:
      return state;
  }
};

const drinks = (state: Array<Drinks> = [], action: Actions) => {
  switch (action.type) {
    case BUY_DRINK: 
      return state.map(item => item.id !== action.id ? 
        item : 
        {
          ...item,
          inventory: item.inventory - 1
        });
    default:
      return state;
  }
}

const outDrinks = (state: Array<MyDrinks> = [], action: Actions) => {
  switch (action.type) {
    case BUY_DRINK: 
      if(state.length > 0) {
        if(state.findIndex((item: MyDrinks) => item.id === action.id) !== -1) {
          return [
            ...state,
            [{
              id: action.id,
              name: action.name,
              inventory: 1
            }];
          ]
        } 
          
      } else {
        return [{
          id: action.id,
          name: action.name,
          inventory: 1
        }];
      }
      // return state.map(item => item.id !== action.id)
    case TAKE_DRINKS: 
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  myWallet,
  availableCoin,
  notAvailableCoin,
  drinks,
  outDrinks
});