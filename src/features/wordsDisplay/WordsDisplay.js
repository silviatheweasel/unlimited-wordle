import { useSelector } from "react-redux";

import { selectAllLetters, selectShowValidationAlert, selectShowWordCountAlert, selectAlphabetStatus } from "../alphabetLetters/alphabetLettersSlice";
import { LetterDisplayRow } from "../../containers/LetterDisplayRow";

export const WordsDisplay = () => {
    const allLetters = useSelector(selectAllLetters);
    const showValidationAlert = useSelector(selectShowValidationAlert);
    const showWordCountAlert = useSelector(selectShowWordCountAlert);
    const alphabetStatus = useSelector(selectAlphabetStatus);

    const createLetterDisplayRows = () => {
        const rowIndexes = Object.keys(allLetters);
        return rowIndexes.map(index => 
            <LetterDisplayRow 
                letterRow={allLetters[index]} 
                key={"letterRow" + index}
                alphabetStatus={alphabetStatus}
                />)
    }

    return (
        <div className="displayContainer">
            {showWordCountAlert && <p>Not enough letters!</p>}
            {showValidationAlert && <p>Not in the word list!</p>}
            {createLetterDisplayRows()}
        </div>)
}