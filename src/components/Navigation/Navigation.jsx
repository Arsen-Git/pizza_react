import "./Navigation.scss";

export default function Navigation({ filter, sort, onFilter, onSort }) {
  const filters = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];
  const sorts = ["популярности", "цене", "алфавиту"];

  const manageSort = (e) => {
    e.target.nextSibling.classList.toggle("sort__container-active");
  };
  const changeFilter = (e) => {
    onFilter(e);
  };
  const changeSort = (e) => {
    onSort(e);
  };

  return (
    <nav className="nav__container">
      <ul className="filter">
        {filters.map((item, index) => (
          <li
            onClick={changeFilter}
            key={index}
            id={item}
            className={
              filter === item ? "filter__item filter-active" : "filter__item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="sort">
        <p className="sort__text">Сортировка по:</p>
        <p onClick={manageSort} className="choosen">
          {sort}
        </p>
        <div className="sort__container">
          <ul className="sort__menu">
            {sorts.map((item, index) => (
              <li
                onClick={changeSort}
                key={index}
                id={item}
                className={
                  sort === item ? "sort__item sort-active" : "sort__item"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
