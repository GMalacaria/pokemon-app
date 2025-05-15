import "./App.css";
import { CssBaseline } from "@mui/material";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import { createStore } from "redux";
import PokemonReducer from "./redux/PokemonReducer";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

const store = createStore(PokemonReducer);

function App() {
  const pokemon = useSelector(({ pokemon }) => pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/pokemon.json")
      .then((resp) => resp.json())
      .then((payload) =>
        dispatch({
          type: "SET_POKEMON",
          payload,
        })
      );
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }
  return (
    <div className="page-container">
      <CssBaseline />
      <h1 className="title">Pokémon Search</h1>
      <div className="two-column-layout">
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <div>
          <PokemonInfo />
        </div>
      </div>
    </div>
  );
}

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;
