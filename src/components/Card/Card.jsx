import "./Card.scss";

export default function Card({ title, imgUrl, smallPrice, onAddCart }) {
  return (
    <div className="card">
      <img width={260} height={260} src={imgUrl} alt="pizza" />
      <h3 className="card__title">{title}</h3>
      <div className="card__settings">
        <ul className="card__menu">
          <li className="base__item item-active">тонкое</li>
          <li className="base__item">традиционное</li>
        </ul>
        <ul className="card__menu">
          <li className="base__item item-active">26 см.</li>
          <li className="base__item">30 см.</li>
          <li className="base__item">40 см.</li>
        </ul>
      </div>
      <div className="card__footer">
        <h2 className="card__price">от {smallPrice} ₴</h2>
        <div className="add">Добавить</div>
      </div>
    </div>
  );
}
