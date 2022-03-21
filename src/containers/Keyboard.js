import { useSelector, useDispatch } from "react-redux";
import { 
        inputLetter, 
        selectLettersInRows, 
        selectIsValidWord,
        selectKeyboardLetters
    } from "../features/alphabetLetters/alphabetLettersSlice";
import { getLastInputIndexes } from "../utilities/getIndexes";
import { alphabet } from "../utilities/alphabet";

import { handleEnter } from "../utilities/handleEnter";
import { handleBackspace } from "../utilities/handleBackspace";
import { matchLetterColor } from "../utilities/matchColor";

export const Keyboard = () => {
    const isValidWord = useSelector(selectIsValidWord);

    const keyboardLetters = useSelector(selectKeyboardLetters);

    const getKeyboardRows = (index1, index2) => {
        const keyboardLettersArray = Object.entries(keyboardLetters);
        return Object.fromEntries(keyboardLettersArray.slice(index1, index2));
    }
    const keyboardRow1 = getKeyboardRows(0, 10);
    const keyboardRow2 = getKeyboardRows(10, 19);
    const keyboardRow3 = getKeyboardRows(19);

    const lettersInRows = useSelector(selectLettersInRows);

    const lastInputRow = getLastInputIndexes(lettersInRows)[0];

    const dispatch = useDispatch();

    const updateCurrentLetter = (letter) => {
        dispatch(inputLetter(letter)); 
    };

    const createRows = (keyboardRowLetters) => {
        return (
            <>
                {Object.keys(keyboardRowLetters)
                    .map(letter => 
                        <button
                            key={letter}
                            className="key"
                            onClick={() => updateCurrentLetter(letter)}
                            style={matchLetterColor(keyboardLetters[letter])}
                            >{letter.toUpperCase()}
                        </button>)}
            </>)
    }

    
    return (
        <div className="keyboardContainer">
            <div className="keyboardRow">
                {createRows(keyboardRow1)}
            </div>
            <div className="keyboardRow">
                {createRows(keyboardRow2)}
            </div>
            <div className="keyboardRow">
                <button 
                    className="enterKey key"
                    onClick={() => handleEnter(lettersInRows[lastInputRow], dispatch)}
                    >ENTER
                </button>
                {createRows(keyboardRow3)}
                <button
                    className="deleteKey key"
                    onClick={() => handleBackspace(dispatch, isValidWord[lastInputRow])}
                    ><i className="fas fa-backspace"></i>
                </button>
            </div>
        </div>)
}