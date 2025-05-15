import { Input } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PokemonFilter = () => {
  const { filter } = useSelector(({ filter }) => ({
    filter,
  }));

  const dispatch = useDispatch();

  return (
    <Input
      style={{ width: "100%", padding: "0.2rem", fontSize: "large" }}
      type="text"
      value={filter}
      placeholder="Search Pokémon"
      onChange={(evt) =>
        dispatch({ type: "SET_FILTER", payload: evt.target.value })
      }
    />
  );
};

export default PokemonFilter;
