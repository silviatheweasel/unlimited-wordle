export const matchLetterColor = (color) => {
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
                color: "black"
            };
    }
}