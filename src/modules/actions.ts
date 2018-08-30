import {
  INPUT_COIN,
  RETURN_COIN,
  TAKE_COIN,
  BUY_DRINK,
  TAKE_DRINKS
} from './constants';

export type InputCoin = {
  type: INPUT_COIN;
  coin: number;
}
export const inputCoin: (coin: number) => InputCoin = (coin) => ({
  type: INPUT_COIN,
  coin,
});

export type ReturnCoin = {
  type: RETURN_COIN;
  coin: number;
}
export const returnCoin: (coin: number) => ReturnCoin = (coin) => ({
  type: RETURN_COIN,
  coin,
});

export type TakeCoin = {
  type: TAKE_COIN;
  coin: number;
}
export const takeCoin: (coin: number) => TakeCoin = (coin) => ({
  type: TAKE_COIN,
  coin,
});

export type BuyDrink = {
  type: BUY_DRINK;
  id: number;
  name: string;
  price: number;
}

export const buyDrink: (
  id:number, 
  name: string,
  price: number
) => BuyDrink = (id, name, price) => ({
  type: BUY_DRINK,
  id,
  name,
  price
});

export type TakeDrinks = {
  type: TAKE_DRINKS;
}
export const takeDrink: () => TakeDrinks = () => ({
  type: TAKE_DRINKS
});

export type Actions = InputCoin | ReturnCoin | TakeCoin | BuyDrink | TakeDrinks