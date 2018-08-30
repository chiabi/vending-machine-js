import {
  INPUT_COIN,
  RETURN_COIN,
  BUY_DRINK
} from './constants';

type InputFunction = (
  coin: number,
) => ({
  type: string;
  coin: number;
})

type ReturnFunction = () => ({
  type: string;
})

type BuyFunction = (
  id: number
) => ({
  type: string;
  id: number;
})

export const inputCoin: InputFunction = (coin) => ({
  type: INPUT_COIN,
  coin,
});

export const returnCoin: ReturnFunction = () => ({
  type: RETURN_COIN,
});

export const buyDrink: BuyFunction = (id) => ({
  type: BUY_DRINK,
  id,
});