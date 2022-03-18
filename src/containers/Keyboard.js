import { useSelector, useDispatch } from "react-redux";
import { selectAlphabetStatus, 
        inputLetter, 
        selectAllLetters, 
        selectIsValidWord
    } from "../features/alphabetLetters/alphabetLettersSlice";
import { getLastInputIndexes } from "../utilities/getIndexes";

import { handleEnter } from "../utilities/handleEnter";
import { handleBackspace } from "../utilities/handleBackspace";

export const Keyboard = () => {
    const alphabetStatus = useSelector(selectAlphabetStatus);
    const isValidWord = useSelector(selectIsValidWord);

    const getKeyboardRows = (index1, index2) => {
        const alphabetStatusArray = Object.entries(alphabetStatus);
        return Object.fromEntries(alphabetStatusArray.slice(index1, index2));
    }
    const keyboardRow1 = getKeyboardRows(0, 10);
    const keyboardRow2 = getKeyboardRows(10, 19);
    const keyboardRow3 = getKeyboardRows(19);

    const allLetters = useSelector(selectAllLetters);

    const lastInputRow = getLastInputIndexes(allLetters)[0];

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
                    onClick={() => handleEnter(allLetters[lastInputRow], dispatch)}
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