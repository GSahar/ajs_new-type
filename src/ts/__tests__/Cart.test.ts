import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('card add item', () => {
  const cart = new Cart();
  cart.add(new Movie(1001, 'Мстители',250 ,'MARVEL', 'IMAX', 2012, 'USA', 'Avengers Assemble!',['фантастика','боевики','фэнтези','приключения'],137));

  expect(cart.items.length).toBe(1);
});