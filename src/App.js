import "./App.css";
import { CssBaseline } from "@mui/material";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import React from "react";

function App() {
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

export default App;
