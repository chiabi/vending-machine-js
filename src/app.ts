import { createStore, compose } from 'redux';
import { Drinks, Coins, State } from './modules/initialState';
import initialState from './modules/initialState';
import reducer from './modules/reducers'
import './scss/style.scss';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer, 
  initialState,
  composeEnhancers()
);

console.log(store.getState());

const machine: HTMLDivElement = document.querySelector('.machine');
const machineDisplay: HTMLDivElement = machine.querySelector('.machine__display');

const drinkName = (name: string) => {
  return name.split('-').map(item => 
    item.replace(/[a-z]?/, (match) => 
      match.toUpperCase()
    )
  ).join(' ');
};

const drinkTemplate = (drink: Drinks, availableCoin: Coins) => `
  <div 
    class="drink 
      ${drink.name} 
      ${availableCoin >= drink.price ? 'is-can-buy' : ''}" 
    data-order="${drink.id}"
    >
    <div class="drink__item"><span>${drinkName(drink.name)}</span></div>
    <button class="btn-buy" ${drink.inventory > 0 ? '' : 'disabled'}>${drink.price}원</button>
  </div>
`;

const renderDrinks = (context: HTMLDivElement, drinks: Array<Drinks>, availableCoin: Coins) => {
  let shelfEl: HTMLDivElement;
  let drinksEl: string = '';
  drinks.forEach((drink, index) => {
    if(index % 4 === 0) {
      shelfEl = document.createElement('div');
      shelfEl.classList.add('display-shelf');
    }
    drinksEl += drinkTemplate(drink, availableCoin);
    if(index % 4 === 3) {
      shelfEl.innerHTML = drinksEl;
      drinksEl = '';
      context.appendChild(shelfEl);
    }
  });
}

const init = () => {
  renderDrinks(machineDisplay, store.getState().drinks, store.getState().availableCoin);
}

init();