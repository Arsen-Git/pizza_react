import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav className="nav__container">
      <ul className="filter">
        <li className="filter__item filter-active">Все</li>
        <li className="filter__item">Мясные</li>
        <li className="filter__item">Вегетарианская</li>
        <li className="filter__item">Гриль</li>
        <li className="filter__item">Острые</li>
        <li className="filter__item">Закрытые</li>
      </ul>
      <div className="sort">
        <p className="sort__text">Сортировка по:</p>
        <p className="choosen">популярности</p>
        <div className="sort__container">
          <ul className="sort__menu">
            <li className="sort__item sort-active">популярности</li>
            <li className="sort__item">по цене</li>
            <li className="sort__item">по алфавиту</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
