import "./Cart.scss";

export default function Cart({ items, onManageCart }) {
  return (
    <div className="cart__container">
      <div className="cart__content">
        {items ? (
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
              <p className="cart__clear">Очистить корзину</p>
            </div>
            <ul className="cart__items"></ul>
            <div className="cart__footer">
              <div className="cart__info">
                <p className="cart__info__count">
                  Всего пицц: <b className="cart__count">3 шт.</b>
                </p>
                <p className="cart__info__price">
                  Сумма заказа: <p className="cart__price">900 ₴</p>
                </p>
              </div>
              <div className="cart__manage">
                <button id="cancel" className="manageBtn">
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
      <h1 className="cart__title">Корзина пустая...</h1>
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
