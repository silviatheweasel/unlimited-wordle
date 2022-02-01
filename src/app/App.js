import React from 'react';
import './App.css';

import { AlphabetLetters } from "../features/alphabetLetters/AlphabetLetters";
import { WordsDisplay } from "../features/wordsDisplay/WordsDisplay";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Unlimited Wordle</h1>
        <main className="main">
          <WordsDisplay />
          <AlphabetLetters />
        </main>
      </header>
    </div>
  );
}

export default App;
