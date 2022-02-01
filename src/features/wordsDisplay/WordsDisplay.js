import { useSelector } from "react-redux";

import { selectCurrentLetter, selectCurrentWord, selectAllLetters} from "../alphabetLetters/alphabetLettersSlice";
import { LetterDisplayRow } from "../../containers/LetterDisplayRow";

export const WordsDisplay = () => {
    const boxes = new Array(36).fill(0);

    const currentLetter = useSelector(selectCurrentLetter);
    const currentWord = useSelector(selectCurrentWord);
    const allLetters = useSelector(selectAllLetters);

    const createLetterDisplayRows = () => {
        const rowIndexes = Object.keys(allLetters);
        return rowIndexes.map(index => 
            <LetterDisplayRow 
                letterRow={allLetters[index]} 
                key={"letterRow" + index}
                />)
    }

    return (
        <div className="displayContainer">
            {createLetterDisplayRows()}
        </div>)
}