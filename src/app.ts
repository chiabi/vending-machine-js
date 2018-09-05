import '@babel/polyfill';
import { createStore, compose } from 'redux';
import {
  inputCoin,
  returnCoin,
  takeCoin,
  buyDrink,
  takeDrinks
} from './modules/actions';
import { Drinks, MyDrinks, Coins } from './modules/initialState';
import initialState from './modules/initialState';
import reducer from './modules/reducers'
import './scss/style.scss';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer, 
  initialState,
  composeEnhancers()
);

// console.log(store.getState());

const machine: HTMLDivElement = document.querySelector('.machine');
const machineDisplay: HTMLDivElement = machine.querySelector('.machine__display');
const wallet: HTMLDivElement = document.querySelector('.wallet');
const walletTotal: HTMLDivElement = wallet.querySelector('.wallet__total');
const walletCoins: HTMLDivElement = wallet.querySelector('.wallet__coin');
const walletPlus: HTMLDivElement = wallet.querySelector('.wallet__plus');
const walletPlusCoin: HTMLDivElement = walletPlus.querySelector('.plus');
const machineUI: HTMLDivElement = machine.querySelector('.machine__ui');
const machineCounter: HTMLDivElement = machineUI.querySelector('.counter');
const machineInlet: HTMLDivElement = machineUI.querySelector('.inlet');
const machineLever: HTMLDivElement = machineUI.querySelector('.switch_lever');
const returnPort: HTMLDivElement = machineUI.querySelector('.return_port');
const machineDoor: HTMLDivElement = machine.querySelector('.machine__door');
const machineDoorOutlet: HTMLDivElement = machineDoor.querySelector('.outlet');
const inventory: HTMLDivElement = document.querySelector('.inventory__drinks');

const drinkName = (name: string) => {
  return name.split('-').map(item => 
    item.replace(/[a-z]?/, (match) => 
      match.toUpperCase()
    )
  ).join(' ');
};

const drinkTemplate = (drink: Drinks, availableCoin: Coins) => `
  <div class="drink__item"><span>${drinkName(drink.name)}</span></div>
  <button 
    class="btn-buy" 
    ${drink.inventory > 0 ?
        '' : 
        'disabled'}
  >${drink.price}원</button>
`;

const myDrinkTemplate = (key: string, value: number) => `
  <div class="drink__item"><span>${drinkName(key)}</span></div>
  <div class="drink__inventory">x ${value}</div>
`;

const buttonEvent = (drink: Drinks) => {
  const {
    id,
    name,
    price
  } = drink;
  const dropDrinkEl = document.createElement('div');
  dropDrinkEl.classList.add('drink__item', drink.name, 'drink__item--down');
  dropDrinkEl.style.left = `${Math.floor(Math.random() * 250)}px`;
  machineDoorOutlet.appendChild(dropDrinkEl);
  store.dispatch(buyDrink(id, name, price));
  window.setTimeout(() => {
    dropDrinkEl.classList.remove('drink__item--down');
  }, 1500);
}

const renderDrinks = (
  context: HTMLDivElement, 
  drinks: Array<Drinks>, 
  availableCoin: Coins
) => {
  let shelfEl: HTMLDivElement;
  context.textContent = '';
  
  drinks.forEach((drink, index) => {
    if(index % 4 === 0) {
      shelfEl = document.createElement('div');
      shelfEl.classList.add('display-shelf');
    }
    const drinkEl: HTMLDivElement = document.createElement('div');
    drinkEl.innerHTML = drinkTemplate(drink, availableCoin);
    drinkEl.classList.add('drink', drink.name);
    if (availableCoin >= drink.price && drink.inventory) {
      drinkEl.classList.add('is-can-buy');
      drinkEl.querySelector('.btn-buy').addEventListener('click', () => {
        buttonEvent(drink);
      })
    }
    shelfEl.appendChild(drinkEl);
    if(index % 4 === 3) {
      context.appendChild(shelfEl);
    }
  });
}

const renderMyDrinks = (
  context: HTMLDivElement, 
  myDrinks: MyDrinks
) => {
  context.textContent = '';
  const fragment: DocumentFragment = document.createDocumentFragment();
  for (const [key, value] of Object.entries(myDrinks)) {
    const drinkEl: HTMLDivElement = document.createElement('div');
    drinkEl.innerHTML = myDrinkTemplate(key, value);
    drinkEl.classList.add('drink', key);
    fragment.appendChild(drinkEl);
  }
  context.appendChild(fragment);
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

const dropCoin = (
  inletEl: HTMLDivElement
) => {
  inletEl.addEventListener('dragover', e => {
    e.preventDefault();
  });
  
  inletEl.addEventListener('drop', e => {
    e.preventDefault();
    const data = Number(e.dataTransfer.getData('text/plain'));
    if(typeof data === 'number' && !isNaN(data)) {
      store.dispatch(inputCoin(data));
    }
  });
}

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

const returnCoinEvent = () => {
  const leverActiveClass = 'switch_lever--turned';
  const portActiveClass = 'return_port--turned';
  const availableCoin = store.getState().availableCoin;
  machineLever.classList.add(leverActiveClass);
  availableCoin && returnPort.classList.add(portActiveClass);
  store.dispatch(returnCoin(availableCoin));
  window.setTimeout(() => {
    machineLever.classList.remove(leverActiveClass);
    availableCoin && returnPort.classList.remove(portActiveClass);
  }, 1000);
}

const takeCoinEvent = () => {
  const activeClass = 'wallet__plus--show';
  const notAvailableCoin = store.getState().notAvailableCoin;
  walletPlusCoin.textContent = `+ ${notAvailableCoin}`;
  walletPlus.classList.add(activeClass);
  store.dispatch(takeCoin(notAvailableCoin));
  window.setTimeout(() => {
    walletPlus.classList.remove(activeClass);
    walletPlusCoin.textContent = '';
  }, 1100);
}

const takeDrinkEvent = () => {
  const outDrinks = store.getState().outDrinks;
  store.dispatch(takeDrinks(outDrinks))
  machineDoorOutlet.textContent = '';
}

const renderMachine = (state: any) => {
  const {
    drinks, 
    myWallet,
    myInventory,
    availableCoin,
  } = state;
  renderDrinks(machineDisplay, drinks, availableCoin);
  renderMyDrinks(inventory, myInventory);
  walletText(myWallet);
  renderCoin(walletCoins, myWallet);
  counterText(availableCoin);
}

const init = () => {
  const state = store.getState();
  renderMachine(state);
  dropCoin(machineInlet);
  machineLever.addEventListener('click', returnCoinEvent);
  returnPort.addEventListener('click', takeCoinEvent);
  machineDoor.addEventListener('click', takeDrinkEvent);
}

store.subscribe(() => renderMachine(store.getState()));
init();