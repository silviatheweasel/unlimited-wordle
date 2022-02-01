import { useSelector } from "react-redux";
import { selectAllLetters } from "../features/alphabetLetters/alphabetLettersSlice";

export const LetterDisplayRow = ({ letterRow }) => {

    return (<div>
        {letterRow.map((letter, index) => 
            <button
                className="letterDisplayBox"
                key={"letter" + index}
                >{letter}
            </button>)}
    </div>)
}