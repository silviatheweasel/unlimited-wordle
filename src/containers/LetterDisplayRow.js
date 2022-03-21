import { matchLetterColor } from "../utilities/matchColor";

export const LetterDisplayRow = ({ letterRow }) => {
    return (
        <div 
            className="letterDisplayRow"
            >
            {letterRow.map((letterObj, index) => 
                <div
                    className="letterDisplayBox"
                    key={"letter" + index}
                    style={matchLetterColor(letterObj.color)}
                    >{letterObj.letter.toUpperCase()}
                </div>)}
        </div>)
}