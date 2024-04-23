import "./StartScreens.css";

const StartScreens = ({ startGame}) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a Jogar </p>
     <button onClick={startGame}>Começar o Jogo </button>
    </div>
  );
};

export default StartScreens;
