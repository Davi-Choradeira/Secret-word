import React, { useState } from 'react';
import './App.css';
import StartScreens from './components/StartScreens';
import Game from './components/Game';
import GameOver from './components/GameOver';
import { wordsList } from './data/words';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: 'game' },
  { id: 3, name: "end" },
];

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedword, setPickedword] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // Lógica para escolher uma palavra e categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickWordAndCategory();
    const wordLetters = word.split("").map(letter => letter.toLowerCase());
    
    setPickedword(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  };

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((currentGuessedLetters) => [
        ...currentGuessedLetters,
        normalizedLetter
      ]);
    } else {
      setWrongLetters((currentWrongLetters) => [
        ...currentWrongLetters,
        normalizedLetter
      ]);
      setGuesses((currentGuesses) => currentGuesses - 1);
    }
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  console.log(guessedLetters);
  console.log(wrongLetters);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreens startGame={startGame} />}
      {gameStage === "game" && (
        <Game 
          verifyLetter={verifyLetter}
          pickedword={pickedword}
          pickedCategory={pickedCategory}
          letters={letters} 
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
