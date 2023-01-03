import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import CardList from "../CardList/CardList";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <h1 className="title">Все пиццы</h1>
      <CardList />
    </>
  );
}

export default App;
