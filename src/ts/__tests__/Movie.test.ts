import Movie from "../domain/Movie";
import Cart from "../service/Cart";

test('Класс Movie создает корректный объект', () => {
  expect(new Movie(
    1000,
    'Мстители',
    'Avengers',
    true,
    2012,
    'США',
    '"Avengers Assemble!"',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    'https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png',5)).toEqual({
    logoImax: true,
    country: "США",
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    id: 1000,
    name: "Мстители",
    nameInEng: "Avengers",
    poster: "https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png",
    tagline: '"Avengers Assemble!"',
    timeline: 137,
    year: 2012,
    price: 5,
  })
})

test('Добавление объектов класса Movie в корзину работает', () => {
  const cart = new Cart();
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
    'https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png', 5))
  expect(cart.items[0]).toEqual({
    logoImax: true,
    country: "США",
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    id: 1000,
    name: "Мстители",
    nameInEng: "Avengers",
    poster: "https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png",
    tagline: '"Avengers Assemble!"',
    timeline: 137,
    year: 2012,
    price:5,
  })
})
const movie1 = new Movie(
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
  100);

const movie2 = new Movie(
  1001,
  'Мстители 2',
  'Avengers 2',
  true,
  2021,
  'Россия',
  '"Avengers Assemble!"',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  138,
  'https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png',
  200);
  test ('Метод sumTotal правильно считает сумму без скидки',() => {
    const cart = new Cart;
    cart.add(movie1);
    cart.add(movie2);
    expect(cart.sumTotal()).toBe(300);
  })
  test ('Метод sumWithDiscount правильно считает сумму со скидкой',() => {
    const cart = new Cart;
    cart.add(movie1);
    cart.add(movie2);
    expect(cart.sumWithDiscount(10)).toBe(270);
  })
  test ('Метод deleteItem удаляет фильм из корзины',() => {
    const cart = new Cart;
    cart.add(movie1);
    cart.add(movie2);
    cart.deleteItem(1001);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(movie1);
  })
