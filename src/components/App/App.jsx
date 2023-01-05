import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import CardList from "../CardList/CardList";
import Cart from "../Cart/Cart";

import { useState } from "react";

import "./App.scss";

function App() {
  const [isCart, setIsCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onManageCart = () => {
    setIsCart(!isCart);
  };
  const onAddItem = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
      <Header onManageCart={onManageCart} />
      {isCart ? <Cart onManageCart={onManageCart} /> : null}
      <Navigation />
      <h1 className="title">Все пиццы</h1>
      <CardList onAddItem={onAddItem} />
    </>
  );
}

export default App;
