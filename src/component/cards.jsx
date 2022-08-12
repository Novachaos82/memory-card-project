const Cards = (props) => {
  //console.log(props.characters + "chaaaaaaaaaaaaaaaaar");

  return (
    <div className="flex justify-center items-center p-4 gap-3 text-white ">
      {props.characters.map((char, index) => {
        return (
          <div
            key={char.id}
            className="cursor-pointer"
            onClick={props.handleClick}
          >
            <div className=" flex bg-black flex-col items-center justify-center rounded-lg">
              <div>{char.name}</div>
              <div>
                <img src={char.sprites.front_default} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Cards };
