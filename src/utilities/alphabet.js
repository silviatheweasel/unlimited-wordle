export const alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

export const getKeyBoardInitialState = (alphabet) => {
    let initialState = {};
    alphabet.forEach(letter => {
        initialState[letter] = {
            isYellow: false,
            isGreen: false,
            isGrey: false,
        }
    });
    return initialState;
}