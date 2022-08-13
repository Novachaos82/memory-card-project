const Cards = (props) => {
  //console.log(props.characters + "chaaaaaaaaaaaaaaaaar");

  return (
    <div className="bg-light overflow-auto  grid grid-cols-1 p-10 justify-center items-center  gap-8 text-white sm:grid-cols-3  md:grid  md:grid-cols-[repeat(5,minmax(0,300px))] w-screen h-full">
      {props.characters.map((char, index) => {
        return (
          <div
            id="card"
            key={char.id}
            className="cursor-pointer"
            onClick={props.handleClick}
          >
            <div className="  flex flex-col justify-center items-center  bg-black   rounded-lg h-80  p-2 hover:scale-105 transition-all 0.3s shadow-lg">
              <div>
                <div className="text-sm font-semibold md:text-2xl capitalize ">
                  {char.name}
                </div>
              </div>
              <div>
                <img className="w-52" src={char.sprites.front_default} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Cards };
