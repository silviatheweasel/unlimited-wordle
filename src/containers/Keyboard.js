import { useSelector, useDispatch } from "react-redux";
import { 
        inputLetter, 
        selectLettersInRows, 
        selectIsValidWord
    } from "../features/alphabetLetters/alphabetLettersSlice";
import { getLastInputIndexes } from "../utilities/getIndexes";
import { alphabet } from "../utilities/alphabet";

import { handleEnter } from "../utilities/handleEnter";
import { handleBackspace } from "../utilities/handleBackspace";

export const Keyboard = () => {
    const isValidWord = useSelector(selectIsValidWord);

    const keyboardRow1 = alphabet.slice(0, 10);
    const keyboardRow2 = alphabet.slice(10, 19);
    const keyboardRow3 = alphabet.slice(19);

    const lettersInRows = useSelector(selectLettersInRows);

    const lastInputRow = getLastInputIndexes(lettersInRows)[0];

    const dispatch = useDispatch();

    const updateCurrentLetter = (letter) => {
        dispatch(inputLetter(letter)); 
    };

    const createRows = (data) => {
        return (
            <>
                {Object.keys(data)
                    .map(letter => 
                        <button
                            key={letter}
                            className="key"
                            onClick={() => updateCurrentLetter(letter)}
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