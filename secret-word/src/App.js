// css
import './App.css';

// React 
import { useCallback, useEffect, useState } from "react";
 
// data
import {wordsList, wordslist} from "./data/words";

// components 
import StartScreens from './components/StartScreens';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
 {id:1,name: "start"},
 {id:2,name: 'game'},
 {id:3,name: "end"},
];

function App() {
  const [gameStage,setGameStage] = useState(stages[0].name);
  const [words] = useState (wordsList);

// starts the secret word game 
 const startGame = () => {
  setGameStage(stages[1].name);
 };

 // process the letter input 
 const verifyLetter = () => {
  setGameStage(stages[2].name);

 };

 // restarts the game
 const retry = () => {
  setGameStage(stages[0].name);

 };
  return (
    <div className="App">
     {gameStage === "start" && <StartScreens startGame={startGame} />}
     {gameStage === "game" && <Game verifyletter={verifyLetter} />}
     {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
