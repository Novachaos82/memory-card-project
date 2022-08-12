import { useEffect, useState } from "react";
import { Cards } from "./cards";

import { ScoreBoard } from "./scoreboard";
const Main = () => {
  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokes, setSelectedPokes] = useState([]);

  useEffect(() => {
    console.log("1");
    //fetchData().then((data) => {
    //  pokemonFetcher(data);
    //});
    fetchData();
  }, []);

  const fetchData = async () => {
    for (let i = 1; i <= 10; i++) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (!data.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        let getData = await data.json();
        //console.log(getData.name);
        //console.log(getData);
        //return getData;
        setPokemon((prev) => [...prev, getData]);
      }
    }
  };

  const handleClick = (e) => {
    shufflePokemon(pokemon);
    checkSelection(e);
  };

  const checkSelection = (e) => {
    if (
      selectedPokes.includes(
        e.target.parentNode.parentNode.firstChild.textContent
      )
    ) {
      console.log(selectedPokes);
      setCount(0);
      reset();
    } else {
      addSelection(e);
      setCount(count + 1);
    }
  };

  const reset = () => {
    setSelectedPokes([]);
    console.log(selectedPokes + "oof");
  };

  const addSelection = (e) => {
    //e.target.parentNode.parentNode.parentNode.className =
    //  "selected cursor-pointer";
    setSelectedPokes((prev) => [
      ...prev,
      e.target.parentNode.parentNode.firstChild.textContent,
    ]);
    //console.log(selectedPokes);
  };
  const shufflePokemon = (cards) => {
    console.log("click");
    console.log([...cards].sort(() => Math.random() - 0.5));
    setPokemon([...cards].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="">
      <Cards characters={pokemon} handleClick={handleClick} />
      <ScoreBoard score={count} />
    </div>
  );
};

export { Main };
