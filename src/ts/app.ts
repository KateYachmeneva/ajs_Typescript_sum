import Cart from './service/Cart';

import Movie from './domain/Movie';
const cart = new Cart;
console.log(cart.items);

cart.add(new Movie(
    1000,
    'Мстители',
    'Avengers',
    true,
    2012,
    'США',
    '"Avengers Assemble!"',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    'https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png',
    5))

