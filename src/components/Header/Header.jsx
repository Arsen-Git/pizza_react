import "./Header.scss";

export default function Header() {
  return (
    <header className="container">
      <div className="header__left">
        <img width={38} height={38} src="./img/pizza-logo.svg" alt="logo" />
        <div className="title__container">
          <h2 className="header__title">REACT PIZZA</h2>
          <p className="subtitle">самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className="cart">
        <p className="cart__price">520 ₴</p>
        <div className="line"></div>
        <div className="cart__items">
          <img width={16} height={16} src="./img/cart.svg" alt="cart" />
          <p className="cart__price">3</p>
        </div>
      </div>
    </header>
  );
}
