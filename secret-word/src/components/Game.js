import "./Game.css";

const Game = ({verifyletter}) => {
  return ( 
  <div className="game"> 
  <p className="points">
    <span>Pontuação: 000</span>
        
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica....</span>
      </h3>
 <div className="worContainer">
   <span className="letter">A</span>
   <span className="blankSquare"></span>
 </div>
 <div className="letterContainer">
  <p>Tente adivinhar  uma letra da palavra:</p>
  <form>
    <input type="text" name="letter" maxLength= "1" required/>
    <button>Jogar!</button>
  </form>
   </div>
<div className="wrongLettersContainer">
  <p>Letras Já utilizadas:</p>
  <span>b, </span>
  <span>c, </span>
</div>
  </div>
  );
};

export default Game;
