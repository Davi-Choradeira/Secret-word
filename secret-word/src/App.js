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

  const [pickedword,setPickedword] = useState("")
  const [pickedCategory,setPickedCategory] =useState("")
  const [letters,setLettes] =useState("")

  const pickeWordAndCategory = () => {
    // pick a random category
   const categories = Object.keys(words)
   const category = 
   categories[Math.floor(Math.random()* Object.keys(categories).length)]
  console.log (category);

// pick a random word
 const word = words[category][Math.floor(Math.random()* words[category].length)]
console.log (word);

return {word,category};
  };

// starts the secret word game 
 function startGame() {
   //pick word and ick category
   const { word, category } = pickeWordAndCategory();

// create an array off letters
 let wordLetters = word.split("");

 wordLetters = wordLetters.map((letter) => letter.toLowerCase());


 console.log(wordLetters);
console.log (word,category);

// fill states 
setPickedword(word);
setPickedCategory(category);
setLettes(letters);

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
