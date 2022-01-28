import { useSelector, useDispatch } from "react-redux";
import { selectCurrentWord, selectAlphabetStatus, saveCurrentLetter } from "../features/alphabetLetters/alphabetLettersSlice";

import { Key } from "../modules/Key";

export const Keyboard = () => {
    const alphabetStatus = useSelector(selectAlphabetStatus);

    const getKeyboardRows = (index1, index2) => {
        const alphabetStatusArray = Object.entries(alphabetStatus);
        return Object.fromEntries(alphabetStatusArray.slice(index1, index2));
    }
    const keyboardRow1 = getKeyboardRows(0, 10);
    const keyboardRow2 = getKeyboardRows(10, 19);
    const keyboardRow3 = getKeyboardRows(19);

    const createRows = (data) => {
        return (
            <>
                {Object.keys(data)
                    .map(letter => 
                        <Key 
                            key={letter}
                            letter={letter}
                            letterStatus={alphabetStatus[letter]}
                        />)}
            </>)
    }

    
    return (
    <form>
        <div className="keyboardRow">
            {createRows(keyboardRow1)}
        </div>
        <div className="keyboardRow">
            {createRows(keyboardRow2)}
        </div>
        <div className="keyboardRow">
            <button 
                className="enterKey key"
                >ENTER
            </button>
            {createRows(keyboardRow3)}
            <button
                className="deleteKey key"
            >
                <i className="fas fa-backspace"></i>
            </button>
        </div>
    </form>)
}