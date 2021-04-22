import Cart from './service/Cart';

import Movie from './domain/Movie';
const cart = new Cart;
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
    console.log(cart.items);
    console.log(typeof(cart.items));
    const sute = cart.items.forEach((item) => console.log(typeof(item)));
     