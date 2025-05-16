import React from "react";
import pokemonStore from "../store/PokemonStore";
import { observer } from "mobx-react";

const PokemonInfo = () => {
  return pokemonStore.selectedPokemon ? (
    <>
      <h2>{pokemonStore.selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(pokemonStore.selectedPokemon.base).map((key) => (
            <tr key={`detail-${key}`}>
              <td>{key}</td>
              <td>{pokemonStore.selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : null;
};

export default observer(PokemonInfo);
