import { useState, useEffect } from "react";
import Card from "../Card/Card";

import axios from "axios";
import "./CardList.scss";

export default function CardList({ onAddCart }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/items")
      .then((res) => setItems(res.data));
  }, []);
  return (
    <div className="cards">
      {items.map((item) => (
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
