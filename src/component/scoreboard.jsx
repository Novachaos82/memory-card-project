const ScoreBoard = (props) => {
  return (
    <div className="bg-orange-200  flex felx-row gap-3 justify-center p-2 font-bold w-screen">
      <div className="bg-green-400 rounded-md p-2">
        Current Score: {props.score}
      </div>
      <div className="bg-red-400 rounded-md p-2">
        High Score: {props.highscore}
      </div>
    </div>
  );
};

export { ScoreBoard };
