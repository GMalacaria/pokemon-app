import React from "react";
import { useSelector } from "react-redux";

const PokemonInfo = () => {
  const selectedPokemon = useSelector(({ selectedPokemon }) => selectedPokemon);

  return selectedPokemon ? (
    <>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={`detail-${key}`}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : null;
};

export default PokemonInfo;
