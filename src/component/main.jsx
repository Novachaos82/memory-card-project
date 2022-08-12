import { useEffect, useState } from "react";
import { Cards } from "./cards";
const Main = () => {
  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);

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

  return (
    <div className="">
      <Cards characters={pokemon} />
    </div>
  );
};

export { Main };
