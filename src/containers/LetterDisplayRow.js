export const LetterDisplayRow = ({ letterRow }) => {
    const matchLetterColor = (color) => {
        switch (color) {
            case "green": 
                return {
                    background: "#6AAA63",
                    color: "white"
                };             
                break;
            case "yellow":
                return {
                    background: "#cab558",
                    color: "white"
                };
                break;
            case "gray": 
                return {
                    background: "#787C7E",
                    color: "white"
                }
            default:
                return {
                    background: "white",
                    color: "black"
                };
        }
    }

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