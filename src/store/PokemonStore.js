import { computed, makeObservable, observable } from "mobx";

class PokemonStore {
  pokemon = [];
  filter = "";
  selectedPokemon = null;
  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedPokemon: observable,
      filterPokemon: computed,
    });
  }

  get filterPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }
  setFilter(filter) {
    this.filter = filter;
  }
  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const pokemonStore = new PokemonStore();

fetch("../pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) => pokemonStore.setPokemon(pokemon))
  .catch((err) => console.error("Error fetching Pokemon data:", err));

export default pokemonStore;
