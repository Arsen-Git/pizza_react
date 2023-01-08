import { useState, useEffect } from "react";
import Card from "../Card/Card";

import axios from "axios";
import "./CardList.scss";

export default function CardList({ onAddCart, filter, sort }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/items")
      .then((res) => setItems(res.data));
  }, []);

  const filterItems = () => {
    const filteredItems =
      filter !== "Все"
        ? items.filter((item) => item.types.includes(filter))
        : items;
    const sortedItems = filteredItems;
    if (sort === "цене" || sort === "алфавиту") {
      sort === "цене"
        ? sortedItems.sort((a, b) => (a.smallPrice > b.smallPrice ? 1 : -1))
        : sortedItems.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      sortedItems.sort((a, b) => (a.mediumPrice > b.mediumPrice ? 1 : -1));
    }

    return sortedItems;
  };
  return (
    <div className="cards">
      {filterItems().map((item) => (
        <Card
          key={item.id}
          imgUrl={item.imgUrl}
          title={item.title}
          prices={[item.smallPrice, item.mediumPrice, item.largePrice]}
          onAddCart={onAddCart}
        />
      ))}
    </div>
  );
}
