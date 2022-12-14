import { useEffect, useState } from "react";
import { Cards } from "./cards";
import { Footer } from "./footer";
import { Header } from "./header";

import { ScoreBoard } from "./scoreboard";
const Main = () => {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokes, setSelectedPokes] = useState([]);

  useEffect(() => {
    console.log("1");
    fetchData();
  }, []);

  const fetchData = async () => {
    for (let i = 1; i <= 10; i++) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (!data.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        let getData = await data.json();

        setPokemon((prev) => [...prev, getData]);
      }
    }
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
      checkWin();
    }
  };

  const checkHighScore = (count) => {
    if (count > highScore) {
      setHighScore(count);
    }
  };

  const checkWin = () => {
    if (count === 9) {
      alert("You Won!!! ");
      setHighScore(10);

      return true;
    }
  };

  const reset = () => {
    setSelectedPokes([]);
    checkHighScore(count);
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

  const handleClick = (e) => {
    shufflePokemon(pokemon);
    checkSelection(e);
  };

  return (
    <div className="overflow-hidden h-screen flex flex-col">
      <Header />
      <ScoreBoard score={count} highscore={highScore} />
      <Cards characters={pokemon} handleClick={handleClick} />
      <Footer />
    </div>
  );
};

export { Main };
