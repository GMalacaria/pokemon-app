import React from "react";
import PokemonRow from "./PokemonRow";
import usePokemonStore from "../store/PokemonStore";

const PokemonTable = () => {
  const pokemon = usePokemonStore((state) => state.pokemon);
  const filter = usePokemonStore((state) => state.filter);
  const setSelectedPokemon = usePokemonStore(
    (state) => state.setSelectedPokemon
  );

  const startIndex = 0;
  const endIndex = 20;

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(startIndex, endIndex)
          .map((pokemon) => (
            <PokemonRow
              key={`row-${pokemon.id}`}
              pokemon={pokemon}
              onClick={(pokemon) => setSelectedPokemon(pokemon)}
            ></PokemonRow>
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
