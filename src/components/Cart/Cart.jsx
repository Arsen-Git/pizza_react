import "./Cart.scss";

export default function Cart({
  items,
  onManageCart,
  cartPrice,
  clearCart,
  deleteFromCart,
}) {
  return (
    <div className="cart__container">
      <div className="cart__content">
        {items.length ? (
          <>
            <div className="cart__head">
              <div className="logo">
                <img
                  width={29}
                  height={29}
                  src="./img/cart-big.svg"
                  alt="cart"
                />
                <h1 className="cart__title">Корзина</h1>
              </div>
              <p onClick={clearCart} className="cart__clear">
                Очистить корзину
              </p>
            </div>
            <ul className="cart__items">
              {items.map((item, index) => (
                <li key={index} className="cart__item">
                  <img
                    width={80}
                    height={80}
                    src={item.imgUrl}
                    alt="pizza"
                    className="cart__item__img"
                  />
                  <div className="cart__item__info">
                    <h2 className="cart__item__title">{item.title}</h2>
                    <p className="cart__item__settings">
                      {item.type} тесто, {item.size}
                    </p>
                  </div>
                  <h2 className="cart__item__price">{item.price} ₴</h2>
                  <div
                    onClick={() => deleteFromCart(index)}
                    className="cart__item__delete"
                  >
                    x
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart__footer">
              <div className="cart__info">
                <p className="cart__info__count">
                  Всего пицц: <b>{items.length} шт.</b>
                </p>
                <p className="cart__info__price">
                  Сумма заказа: <b className="cart__price">{cartPrice} ₴</b>
                </p>
              </div>
              <div className="cart__manage">
                <button
                  onClick={onManageCart}
                  id="cancel"
                  className="manageBtn"
                >
                  Вернуться назад
                </button>
                <button id="confirm" className="manageBtn manageBtn-orange">
                  Оплатить сейчас
                </button>
              </div>
            </div>
          </>
        ) : (
          <EmptyCart onManageCart={onManageCart} />
        )}
      </div>
    </div>
  );
}

function EmptyCart({ onManageCart }) {
  return (
    <>
      <h1 className="cart__title-empty">Корзина пустая...</h1>
      <p className="cart__text">
        Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы
        заказать пиццу, перейди на главную страницу.
      </p>
      <img
        className="cart__emptyImg"
        width={300}
        height={255}
        src="./img/emptyCart.png"
        alt="empty cart"
      />
      <button
        onClick={() => onManageCart()}
        id="cancel"
        className="manageBtn manageBtn-black"
      >
        Вернуться назад
      </button>
    </>
  );
}
