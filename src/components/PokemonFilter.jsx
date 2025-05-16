import { Input } from "@mui/material";
import React from "react";
import pokemonStore from "../store/PokemonStore";
import { observer } from "mobx-react";

const PokemonFilter = () => (
  <Input
    style={{ width: "100%", padding: "0.2rem", fontSize: "large" }}
    type="text"
    value={pokemonStore.filter}
    placeholder="Search Pokémon"
    onChange={(evt) => pokemonStore.setFilter(evt.target.value)}
  />
);

export default observer(PokemonFilter);
