export const LetterDisplayRow = ({ letterRow, alphabetStatus }) => {
    const matchLetterColor = (alphabetStatus, letter) => {
        if (letter) {
            if (alphabetStatus[letter].isGreen) {
                return {
                    background: "#6AAA63",
                    color: "white"
                };
            } else if (alphabetStatus[letter].isYellow) {
                return {
                    background: "#cab558",
                    color: "white"
                };
            } else if (alphabetStatus[letter].isGrey) {
                return {
                    background: "#787C7E",
                    color: "white"
            };
            } else {
                return {
                    background: "white",
                    color: "black"
                }
            }
        }
    }

    return (
    <div className="letterDisplayRow">
        {letterRow.map((letter, index) => 
            <div
                className="letterDisplayBox"
                key={"letter" + index}
                style={matchLetterColor(alphabetStatus, letter)}
                >{letter.toUpperCase()}
                {console.log(matchLetterColor(alphabetStatus, letter))}
            </div>)}
    </div>)
}