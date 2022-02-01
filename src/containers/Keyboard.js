import { useSelector, useDispatch } from "react-redux";
import { selectAlphabetStatus, selectCurrentLetter, inputLetter, deleteLetter } from "../features/alphabetLetters/alphabetLettersSlice";


export const Keyboard = () => {
    const alphabetStatus = useSelector(selectAlphabetStatus);
    const getKeyboardRows = (index1, index2) => {
        const alphabetStatusArray = Object.entries(alphabetStatus);
        return Object.fromEntries(alphabetStatusArray.slice(index1, index2));
    }
    const keyboardRow1 = getKeyboardRows(0, 10);
    const keyboardRow2 = getKeyboardRows(10, 19);
    const keyboardRow3 = getKeyboardRows(19);

    const currentLetter = useSelector(selectCurrentLetter);

    const dispatch = useDispatch();

    const updateCurrentLetter = (letter) => {
        console.log(letter);
        dispatch(inputLetter(letter));
    };

    // const delLetter = () => {
    //     dispatch(deleteLetter());
    // }

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
    <div>
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
                // onClick={() => dispatch(deleteLetter())}
                ><i className="fas fa-backspace"></i>
            </button>
        </div>
    </div>)
}