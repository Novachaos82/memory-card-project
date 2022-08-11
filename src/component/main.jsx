import { useEffect, useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const [char, setChar] = useState([]);
  const [img, setImg] = useState("");

  useEffect(() => {
    console.log("1");
    fetchData();
  }, []);

  const fetchData = () => {
    (async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
      let getData = await data.json();
      for (let i = 0; i < 10; i++) {
        setChar((char) => [...char, getData.results[i].name]);
      }
      //console.log(char);
      //setImg(getData.sprites.front_default);

      //console.log(getData.sprites.front_default);
    })();
  };

  return (
    <div className="">
      {char}
      {/*<img src={img}></img>*/}
    </div>
  );
};

export { Main };
