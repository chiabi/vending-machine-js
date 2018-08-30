import {
  INPUT_COIN,
  RETURN_COIN,
  TAKE_COIN,
  BUY_DRINK,
  TAKE_DRINKS
} from './constants';
import { Drinks, Coins } from './initialState';
import { Actions } from './actions';

export const myWallet = (state: Coins = 0, action: Actions) => {
  switch (action.type) {
    case INPUT_COIN: 
      return state - action.coin;
    case TAKE_COIN: 
      return state + action.coin;
    default:
      return state;
  }
};

export const availableCoin = (state: Coins = 0, action: Actions) => {
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

export const notAvailableCoin = (state: Coins = 0, action: Actions) => {
  switch (action.type) {
    case RETURN_COIN: 
      return state + action.coin;
    case TAKE_COIN: 
      return state - action.coin;
    default:
      return state;
  }
};

export const drinks = (state: Array<Drinks> = [], action: Actions) => {
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

export const outDrinks = (state: Array<string> = [], action: Actions) => {
  switch (action.type) {
    case BUY_DRINK: 
      return [
        ...state,
        action.name
      ]
    case TAKE_DRINKS: 
      return [];
    default:
      return state;
  }
}