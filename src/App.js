import React, { useEffect, useState } from "react";

/** TODO - we want { name, rarity, imgUrl, types } */
/** TODO - Also, remove Alolan pokemon */
import pokemonJSON from "./json/pokemon-v1.json";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  /**
   * Convenience function to return a random pokemon from the JSON.
   */
  const getRandomPokemon = () => {
    const NUMBER_OF_POKEMON = 151;
    let pokemonNumber = Math.floor(Math.random() * NUMBER_OF_POKEMON) + 1;
    return pokemonJSON[pokemonNumber];
  };

  /**
   * Resets the results & retrieves a new set of random pokemon.
   */
  const retrievePokemon = () => {
    const RESULTS_COUNT = 100;
    const temp = [];

    setResults([]);
    for (let i = 0; i < RESULTS_COUNT; i++) {
      const pokemon = getRandomPokemon();
      temp.push(pokemon);
    }
    setResults(currentResults => {
      return [...currentResults, ...temp];
    });
    console.log(results);
  };

  /**
   * Click handler to generate results.
   */
  const handleOnClick = () => {
    retrievePokemon();
  };

  /**
   * Initialize the results with some pokemon.
   */
  useEffect(() => {
    retrievePokemon();
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Pokeball</h2>
        <button onClick={handleOnClick}>Generate 100 results</button>

        <div>
          <h2>Results</h2>
          <PokemonList pokemonResults={results} />
        </div>
      </div>
    </div>
  );
}

function PokemonList({ pokemonResults }) {
  if (pokemonResults.length <= 0) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {pokemonResults.map((pokemon, index) => {
        const { name, rarity } = pokemon;
        const rarityClassName = rarity.replace(" ", "").toLowerCase();
        const key = `${index}-${name}`;

        return (
          <span
            className={rarityClassName}
            key={key}
            style={{
              padding: "20px"
            }}
          >
            {name} - {rarity}
          </span>
        );
      })}
    </div>
  );
}

export default App;
