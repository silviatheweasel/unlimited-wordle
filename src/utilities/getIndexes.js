export const getFirstEmptyIndexes = (lettersInRows) => {
    const keys = Object.keys(lettersInRows);
    const firstEmptyElIndexArr = keys.map(key => lettersInRows[key].findIndex(element => !element.letter));
    const firstRowEmpty = firstEmptyElIndexArr.findIndex(el => el !== -1);
    const firstIndexEmpty = firstEmptyElIndexArr[firstRowEmpty];
    return [firstRowEmpty, firstIndexEmpty];
}

export const getLastInputIndexes = (lettersInRows) => {
    const keys = Object.keys(lettersInRows);
    const firstEmptyElIndexArr = keys.map(key => lettersInRows[key].findIndex(element => !element.letter));
    //find the index of the first empty string in the first row that has empty strings
    const firstEmptyStrIndex = firstEmptyElIndexArr.find(index => index !== -1);
    const firstRowEmpty = firstEmptyElIndexArr.findIndex(el => el !== -1);
    let lastInputRow;
    let lastInputIndex;
    if (firstEmptyStrIndex === 0 && firstRowEmpty > 0) {
        lastInputRow = firstRowEmpty - 1;
        lastInputIndex = 4;
    } else {
        lastInputRow = firstEmptyElIndexArr.findIndex(el => el !== -1);
        lastInputIndex = firstEmptyStrIndex - 1;
    }
    return [lastInputRow, lastInputIndex];
}