import { Input } from "@mui/material";
import React from "react";
import usePokemonStore from "../store/PokemonStore";

const PokemonFilter = () => {
  const filter = usePokemonStore((state) => state.filter);
  const setFilter = usePokemonStore((state) => state.setFilter);

  return (
    <Input
      style={{ width: "100%", padding: "0.2rem", fontSize: "large" }}
      type="text"
      value={filter}
      placeholder="Search Pokémon"
      onChange={(evt) => setFilter(evt.target.value)}
    />
  );
};

export default PokemonFilter;
