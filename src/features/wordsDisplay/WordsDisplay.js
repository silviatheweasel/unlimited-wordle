import { useSelector } from "react-redux";

import { selectLettersInRows, selectShowValidationAlert, selectShowWordCountAlert, selectIsValidWord } from "../alphabetLetters/alphabetLettersSlice";
import { LetterDisplayRow } from "../../containers/LetterDisplayRow";
import { getLastInputIndexes } from "../../utilities/getIndexes";

export const WordsDisplay = () => {
    const lettersInRows = useSelector(selectLettersInRows);
    const showValidationAlert = useSelector(selectShowValidationAlert);
    const showWordCountAlert = useSelector(selectShowWordCountAlert);
    const isValidWord = useSelector(selectIsValidWord);

    const lastInputRow = getLastInputIndexes(lettersInRows)[0];

    const createLetterDisplayRows = () => {
        const rowIndexes = Object.keys(lettersInRows);
        return rowIndexes.map(index => 
            <LetterDisplayRow 
                letterRow={lettersInRows[index]} 
                key={"letterRow" + index}
                />)
    }

    return (
        <div className="displayContainer">
            {showWordCountAlert && <p>Not enough letters!</p>}
            {showValidationAlert && <p>Not in the word list!</p>}
            {createLetterDisplayRows()}
        </div>)
}