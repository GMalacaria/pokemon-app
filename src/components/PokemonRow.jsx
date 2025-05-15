import { Button } from "@mui/material";
import React from "react";

const PokemonRow = ({ pokemon, onClick }) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClick(pokemon)}
      >
        Detail
      </Button>
    </td>
  </tr>
);

export default PokemonRow;
