import { deleteLetter, hideValidityAlert } from "../features/alphabetLetters/alphabetLettersSlice";

export const handleBackspace = (dispatch, isValidWord) => {

    if (!isValidWord) {
        dispatch(deleteLetter());
        dispatch(hideValidityAlert());
    }
}