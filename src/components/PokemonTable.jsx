import React from "react";
import PokemonRow from "./PokemonRow";
import { observer } from "mobx-react";
import pokemonStore from "../store/PokemonStore";

const PokemonTable = () => {
  const startIndex = 0;
  const endIndex = 20;

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        {pokemonStore.filterPokemon
          .slice(startIndex, endIndex)
          .map((pokemon) => (
            <PokemonRow
              key={`row-${pokemon.id}`}
              pokemon={pokemon}
              onClick={(pokemon) => pokemonStore.setSelectedPokemon(pokemon)}
            ></PokemonRow>
          ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
