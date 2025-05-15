import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const { filter, pokemon } = useSelector(({ filter, pokemon }) => ({
    filter,
    pokemon,
  }));

  const dispatch = useDispatch();
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
              onClick={(pokemon) =>
                dispatch({ type: "SET_SELECTED_POKEMON", payload: pokemon })
              }
            ></PokemonRow>
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
