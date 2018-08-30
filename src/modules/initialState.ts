type Drinks = {
  id: number;
  name: string;
  inventory: number;
  price: number;
}

const initialState: {
  drinks: Array<Drinks>, 
  wallet: number, 
  coin: number
} = {
  drinks: [{
    id: 1,
    name: 'coca-cola',
    inventory: 8,
    price: 800
  },{
    id: 2,
    name: 'cider',
    inventory: 5,
    price: 800 
  },{
    id: 3,
    name: 'fanta',
    inventory: 3,
    price: 750
  },{
    id: 4,
    name: 'water',
    inventory: 10,
    price: 1000 
  },{
    id: 5,
    name: 'vitamin',
    inventory: 2,
    price: 1200 
  },{
    id: 6,
    name: 'dr-pepper',
    inventory: 12,
    price: 900 
  },{
    id: 7,
    name: 'grape-juice',
    inventory: 12,
    price: 650 
  },{
    id: 8,
    name: 'orange-juice',
    inventory: 12,
    price: 650 
  }],
  wallet: 1250,
  coin: 0
};

export default initialState;