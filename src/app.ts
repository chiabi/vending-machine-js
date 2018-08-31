import { createStore, compose } from 'redux';
import {
  inputCoin
} from './modules/actions';
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
const wallet: HTMLDivElement = document.querySelector('.wallet');
const walletTotal: HTMLDivElement = wallet.querySelector('.wallet__total');
const walletCoins: HTMLDivElement = wallet.querySelector('.wallet__coin');
const machineUI: HTMLDivElement = machine.querySelector('.machine__ui');
const machineCounter: HTMLDivElement = machineUI.querySelector('.counter');
const machineInlet: HTMLDivElement = machineUI.querySelector('.inlet');

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

const renderDrinks = (
  context: HTMLDivElement, 
  drinks: Array<Drinks>, 
  availableCoin: Coins
) => {
  let shelfEl: HTMLDivElement;
  let drinksEl: string = '';
  context.textContent = '';
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

const coinText = (context: HTMLDivElement, coin: Coins) => {
  let coinUnit: Array<string> = ('' + coin).split('');
  let l = coinUnit.length;
  context.textContent = '';
  let thousandCoin: string = coinUnit.reduce((acc, coin, index) => 
    (index % 3 === (l % 3)) && (index !== 0) ? 
      acc + ',' + coin : 
      acc + coin, ''
  );
  context.textContent = `${thousandCoin}원`
};

const walletText = (coin: Coins) => coinText(walletTotal, coin);
const counterText = (coin: Coins) => coinText(machineCounter, coin);

const dragCoin = (
  coinEl: HTMLButtonElement, 
) => {
  coinEl.addEventListener('dragstart', (e: any) => {
    e.dataTransfer.setData('text/plain', e.target.dataset['coin']);
    e.target.style.opacity = .5;
  });
  coinEl.addEventListener('dragend', (e: any) => {
    e.target.style.opacity = 1;
  });
}

machineInlet.addEventListener('dragover', e => {
  e.preventDefault();
});

machineInlet.addEventListener('drop', e => {
  e.preventDefault();
  const data = Number(e.dataTransfer.getData('text/plain'));
  if(typeof data === 'number' && !isNaN(data)) {
    store.dispatch(inputCoin(data));
    renderMachine();
  }
});

const renderCoin = (
  context: HTMLDivElement,
  myWallet: Coins
) => {
  const kind = [50, 100, 500, 1000];
  const coinsEl: DocumentFragment = document.createDocumentFragment();
  context.textContent = '';
  kind.forEach((coin) => {
    const buttonEl: HTMLButtonElement = document.createElement('button');
    buttonEl.classList.add('coin');
    buttonEl.setAttribute('data-coin', '' + coin);
    buttonEl.textContent = '' + coin;
    if((myWallet - coin) < 0 ) {
      buttonEl.setAttribute('disabled', 'true');
    } else {
      buttonEl.setAttribute('draggable', 'true');
      dragCoin(buttonEl);
    }
    coinsEl.appendChild(buttonEl);
  });
  context.appendChild(coinsEl);
}

const renderMachine = () => {
  const {
    drinks, 
    myWallet,
    availableCoin,
  } = store.getState();

  renderDrinks(machineDisplay, drinks, availableCoin);
  walletText(myWallet);
  renderCoin(walletCoins, myWallet);
  counterText(availableCoin);
}

renderMachine();