import { useSelector } from "react-redux";
import { selectAllLetters } from "../features/alphabetLetters/alphabetLettersSlice";

export const LetterDisplayRow = ({ letterRow }) => {

    return (
    <div className="letterDisplayRow">
        {letterRow.map((letter, index) => 
            <div
                className="letterDisplayBox"
                key={"letter" + index}
                >{letter.toUpperCase()}
            </div>)}
    </div>)
}