import React from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { AlphabetLetters } from "../features/alphabetLetters/AlphabetLetters";
import { WordsDisplay } from "../features/wordsDisplay/WordsDisplay";
import { alphabet } from "../utilities/alphabet";
import { 
  inputLetter, 
  selectLettersInRows, 
  selectIsValidWord 
} from "../features/alphabetLetters/alphabetLettersSlice";
import { getLastInputIndexes } from "../utilities/getIndexes";
import { handleEnter } from "../utilities/handleEnter";
import { handleBackspace } from "../utilities/handleBackspace";

function App() {
  const dispatch = useDispatch();
  const lettersInRows = useSelector(selectLettersInRows);
  const lastInputRow = getLastInputIndexes(lettersInRows)[0];
  const isValidWord = useSelector(selectIsValidWord);

  const handleKeyDown = useCallback(
    (e) => {
      const letterArr = lettersInRows[lastInputRow].map(letterObj => letterObj.letter);
      if (e.key === "Enter") {
        handleEnter(letterArr, dispatch);
      } else if (alphabet.indexOf(e.key.toLowerCase()) !== -1) {
        dispatch(inputLetter(e.key.toLowerCase())); 
      } else if (e.key === "Backspace") {
        handleBackspace(dispatch, isValidWord[lastInputRow]);
      }
    }, [lettersInRows, dispatch, isValidWord, lastInputRow]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [lettersInRows, dispatch, isValidWord, handleKeyDown]);

  // useEffect(() => {
  //   if (isValidWord[lastInputRow]) {
  //     const currentRow = document.getElementById("letterRow" + lastInputRow);
  //     const letterDisplayBoxes = currentRow.getElementsByClassName("letterDisplayBox");

  //   }
  // }, [lastInputRow, dispatch]);

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
