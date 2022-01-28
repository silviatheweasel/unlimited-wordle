import { useSelector } from "react-redux";

import { selectCurrentLetter } from "../alphabetLetters/alphabetLettersSlice";

export const WordsDisplay = () => {
    const rows = new Array(5).fill(0);
    const columns = new Array(6).fill(0);

    const currentLetter = useSelector(selectCurrentLetter);

    return (
        <div>
            {columns.map((column, index) => 
                (<div 
                    className="wordDisplayRow"
                    key={"column" + index}
                    >
                        {rows.map((row, index) => 
                            (<button 
                                className="letterTile"
                                key={"column" + index}
                                >{currentLetter}</button>))}
                    </div>))}

        </div>)
}