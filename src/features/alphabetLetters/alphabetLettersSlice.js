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
        currentWord: "",
        currentLetter: "",
        allLetters: {0: Array(6).fill(""), 1: Array(6).fill(""), 2: Array(6).fill(""), 3: Array(6).fill(""), 4: Array(6).fill(""), 5: Array(6).fill("")}
    },
    reducers: {
        // inputLetter: (state, action) => ({ ...state, currentWord: state.currentWord + action.payload }),
        // inputLetter: (state, action) => ({ ...state, allLetters: state.allLetters + action.payload }),
        // deleteLetter: (state) => ({ ...state, allLetters: state.allLetters.slice(0, -1) }),
        saveCurrentLetter: (state, action) => ({ ...state, currentLetter: action.payload }),
        inputLetter: (state, action) => {
            const keys = Object.keys(state.allLetters);
            const indexes = [];
            keys.forEach(key => {
                const indexFirstEmpty = state.allLetters[key].findIndex(element => !element);
                indexes.push(indexFirstEmpty);
                return indexes;
            });
            const firstRowNotEmpty = indexes.findIndex(el => el !== -1);
            const firstIndexNotEmpty = indexes[firstRowNotEmpty];
            state.allLetters[firstRowNotEmpty][firstIndexNotEmpty] = action.payload;
        }
    }
});

export const selectCurrentWord = (state) => state.alphabetLetters.currentWord;

export const selectAlphabetStatus = (state) => state.alphabetLetters.alphabetStatus;

export const selectCurrentLetter = (state) => state.alphabetLetters.currentLetter;

export const selectAllLetters = (state) => state.alphabetLetters.allLetters;

export const { inputLetter, deleteLetter, saveCurrentLetter } = alphabetLettersSlice.actions;

export default alphabetLettersSlice.reducer;