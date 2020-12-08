import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";


//API

const App = () => {
  const [items, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  //hacemos un useState para llamar al estado de los objetos del fetch
  useEffect(() => {
    getDataFromApi().then((data) => {
      setUsers(data);
    });
  }, []);
  // [] array vacío para que no se haga un bucle infinito

  //EVENTO PARA EJECUTAR LA ACCION DE FILTERS

  const handleFilter = (data) => {
    setNameFilter(data.value);
  };

  //RENDER

  const filteredItems = items.filter((item) => {
    return item.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderUserDetail = (props) => {
    const itemId = parseInt(props.match.params.id);
    const foundItem = items.find((item) => {
      return itemId === item.id;
    });
    if (foundItem !== undefined) {
      return (
        <CharacterDetail
          id={foundItem.id}
          name={foundItem.name}
          status={foundItem.status}
          species={foundItem.species}
          image={foundItem.image}
          origin={foundItem.origin}
          episodes={foundItem.episodes}
        />
      );
    } else {
      return <p>Character not found</p>;
    }
  };

  return (
    <>
      <Header />
      <Filters handleFilter={handleFilter} />
      <Switch>
        <Route exact path="/">
          <CharacterList items={filteredItems} />
        </Route>
        <Route path="/user/:id" render={renderUserDetail} />
      </Switch>
    </>
  );
};

export default App;
