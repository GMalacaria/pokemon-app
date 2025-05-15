import create, { useStore } from "zustand";

const usePokemonStore = create((set) => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({ ...state, selectedPokemon })),
}));

fetch("../pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) =>
    usePokemonStore.setState((state) => ({ ...state, pokemon: pokemon }))
  );

export default usePokemonStore;
