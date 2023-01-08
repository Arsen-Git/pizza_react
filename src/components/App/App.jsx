import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import CardList from "../CardList/CardList";
import Cart from "../Cart/Cart";

import { useState } from "react";

import "./App.scss";

function App() {
  const [isCart, setIsCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const [filter, setFilter] = useState("Все");
  const [sort, setSort] = useState("популярности");

  const onManageCart = () => {
    document.body.classList.toggle("block");
    setIsCart(!isCart);
  };
  const onAddCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartPrice((prev) => prev + +item.price);
  };
  const clearCart = () => {
    setCartItems([]);
    setCartPrice(0);
  };
  const deleteFromCart = (index) => {
    const newCart = cartItems.filter((item) => cartItems[index] !== item);
    const newPrice = cartPrice - cartItems[index].price;
    setCartItems(newCart);
    setCartPrice(newPrice);
  };
  const onFilter = (e) => {
    setFilter(e.target.getAttribute("id"));
  };
  const onSort = (e) => {
    setSort(e.target.getAttribute("id"));
  };
  return (
    <>
      <Header
        count={cartItems.length}
        cartPrice={cartPrice}
        onManageCart={onManageCart}
      />
      {isCart ? (
        <Cart
          onManageCart={onManageCart}
          items={cartItems}
          cartPrice={cartPrice}
          clearCart={clearCart}
          deleteFromCart={deleteFromCart}
        />
      ) : null}
      <Navigation
        filter={filter}
        sort={sort}
        onFilter={onFilter}
        onSort={onSort}
      />
      <h1 className="title">Все пиццы</h1>
      <CardList onAddCart={onAddCart} filter={filter} sort={sort} />
    </>
  );
}

export default App;
