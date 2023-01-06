import { useState } from "react";

import "./Card.scss";

export default function Card({ title, imgUrl, prices, onAddCart }) {
  const types = ["тонкое", "традиционное"];
  const sizes = ["26 см.", "30 см.", "40 см."];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onChangeSettings = (e) => {
    const kind = e.target.getAttribute("data-id");
    kind === "types"
      ? setActiveType(types.indexOf(e.target.textContent))
      : setActiveSize(sizes.indexOf(e.target.textContent));
  };
  const onAdd = () => {
    onAddCart({
      title,
      imgUrl,
      price: prices[activeSize],
      size: sizes[activeSize],
      type: types[activeType],
    });
  };
  return (
    <div className="card">
      <img width={260} height={260} src={imgUrl} alt="pizza" />
      <h3 className="card__title">{title}</h3>
      <div className="card__settings">
        <ul className="card__menu">
          {types.map((type, index) => (
            <li
              key={index}
              onClick={onChangeSettings}
              data-id={"types"}
              className={
                activeType === types.indexOf(type)
                  ? "base__item item-active"
                  : "base__item"
              }
            >
              {type}
            </li>
          ))}
        </ul>
        <ul className="card__menu">
          {sizes.map((size, index) => (
            <li
              key={index}
              onClick={onChangeSettings}
              data-id={"sizes"}
              className={
                activeSize === sizes.indexOf(size)
                  ? "base__item item-active"
                  : "base__item"
              }
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="card__footer">
        <h2 className="card__price">от {prices[activeSize]} ₴</h2>
        <div onClick={onAdd} className="add">
          Добавить
        </div>
      </div>
    </div>
  );
}
