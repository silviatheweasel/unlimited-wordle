import React from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { AlphabetLetters } from "../features/alphabetLetters/AlphabetLetters";
import { WordsDisplay } from "../features/wordsDisplay/WordsDisplay";
import { alphabet } from "../utilities/alphabet";
import { 
  inputLetter, 
  selectAllLetters, 
  selectIsValidWord 
} from "../features/alphabetLetters/alphabetLettersSlice";
import { getLastInputIndexes } from "../utilities/getIndexes";
import { handleEnter } from "../utilities/handleEnter";
import { handleBackspace } from "../utilities/handleBackspace";

function App() {
  const dispatch = useDispatch();
  const allLetters = useSelector(selectAllLetters);
  const lastInputRow = getLastInputIndexes(allLetters)[0];
  const isValidWord = useSelector(selectIsValidWord);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleEnter(allLetters[lastInputRow], dispatch);
      } else if (alphabet.indexOf(e.key.toLowerCase()) !== -1) {
        dispatch(inputLetter(e.key.toLowerCase())); 
      } else if (e.key === "Backspace") {
        handleBackspace(dispatch, isValidWord[lastInputRow]);
      }
    }, [allLetters, dispatch, isValidWord, lastInputRow]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [allLetters, dispatch, isValidWord, handleKeyDown]);

  return (
    <div 
      className="app"
      >
      <header>
        <main 
          className="main"
          >
          <WordsDisplay/>
          <AlphabetLetters />
        </main>
      </header>
    </div>
  );
}

export default App;
