import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { alphabet, getKeyBoardInitialState } from "../../utilities/alphabet";

const alphabetStatus = getKeyBoardInitialState(alphabet);

// export const checkLetters = createAsyncThunk(
//     "alphabetLetters/checkLetterStatus",
//     async (letterArray) => {

//     }
// )

export const alphabetLettersSlice = createSlice({
    name: "alphabetLetters",
    initialState: {
        alphabetStatus: alphabetStatus, 
        currentWord: [],
        currentLetter: ""
    },
    reducers: {
        inputLetter: (state, action) => state.currentWord + action.payload,
        deleteLetter: (state) => state.currentWord.slice(0, -1),
        saveCurrentLetter: (state, action) => state.currentLetter = action.payload
    }
});

export const selectCurrentWord = (state) => state.alphabetLetters.currentWord;

export const selectAlphabetStatus = (state) => state.alphabetLetters.alphabetStatus;

export const selectCurrentLetter = (state) => state.alphabetLetters.currentLetter;

export const { inputLetter, deleteLetter, saveCurrentLetter } = alphabetLettersSlice.actions;

export default alphabetLettersSlice.reducer;