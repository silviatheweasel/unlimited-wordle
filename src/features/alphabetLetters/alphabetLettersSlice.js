import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { alphabet, getKeyBoardInitialState } from "../../utilities/alphabet";
import { getFirstEmptyIndexes, getLastInputIndexes } from "../../utilities/getIndexes";
import { api } from "../../env/api";

const alphabetStatus = getKeyBoardInitialState(alphabet);

const getAsyncData = async (str) => {
    const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
    const endpoint = url + str + "?key=" + api;
    try {
        const data = await fetch(endpoint);
        const jsonData = await data.json();
        return jsonData;
    } catch(error) {
        console.log(error);
    }
}

export const checkIsLetter = createAsyncThunk(
    "alphabetLetters/checkIsLetter",
    async (str) => {
        const jsonData = await getAsyncData(str);
        if (jsonData.length === 0 || typeof jsonData[0] === "string" || jsonData[0].length === 0) {
            return true;
        } else {
            return false;
        } 
    }
)

export const alphabetLettersSlice = createSlice({
    name: "alphabetLetters",
    initialState: {
        alphabetStatus: alphabetStatus,
        currentWord: {
            showWordCountAlert: false,
            showValidationAlert: false,
        },
        lettersInRows: { 
            0: Array(5).fill({letter: "", color: ""}),
            1: Array(5).fill({letter: "", color: ""}),
            2: Array(5).fill({letter: "", color: ""}), 
            3: Array(5).fill({letter: "", color: ""}),
            4: Array(5).fill({letter: "", color: ""}),
        },
        isValidWord: { 0: false, 1: false, 2: false, 3: false, 4: false }
    },
    reducers: {
        inputLetter: (state, action) => {
            const [lastInputRow, lastInputIndex] = getLastInputIndexes(state.lettersInRows);
            const [firstRowEmpty, firstIndexEmpty] = getFirstEmptyIndexes(state.lettersInRows);
            if (lastInputIndex < 4) {
                state.lettersInRows[lastInputRow][lastInputIndex + 1].letter = action.payload;
            } else if (lastInputIndex === 4) {
                if (state.isValidWord[lastInputRow]) {
                    state.lettersInRows[firstRowEmpty][firstIndexEmpty].letter = action.payload;
                }
            }
        },
        deleteLetter: (state) => {
            const [lastInputRow, lastInputIndex] = getLastInputIndexes(state.lettersInRows);
            state.lettersInRows[lastInputRow][lastInputIndex].letter = "";
        },
        checkIfEnoughLetters: (state) => {
            state.currentWord.showWordCountAlert = !state.currentWord.showWordCountAlert;
        },
        hideValidityAlert: (state, action) => {
            state.currentWord.showValidationAlert = action.payload;
        },
        checkIsValidWord: (state, action) => {
            const lastInputRow = getLastInputIndexes(state.lettersInRows)[0];
            state.isValidWord[lastInputRow] = action.payload;
        },
        matchLetters: (state, action) => {
            const { currentRowLetters, targetWord } = action.payload;
            const [lastInputRow, lastInputIndex] = getLastInputIndexes(state.lettersInRows);
            currentRowLetters.forEach((letter, index) => {
                const targetIndex = targetWord.indexOf(letter);
                console.log(state.lettersInRows[lastInputRow][index]);
                if (targetIndex === -1) {
                    state.lettersInRows[lastInputRow][index].color = "gray";
                } else {
                    if (targetIndex === index) {
                        state.lettersInRows[lastInputRow][index].color = "green";
                    } else {
                        state.lettersInRows[lastInputRow][index].color = "yellow";
                    }
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(checkIsLetter.fulfilled, (state, action) => {
                state.currentWord.showValidationAlert = action.payload;
            })
    }
});

export const selectAlphabetStatus = (state) => state.alphabetLetters.alphabetStatus;

export const selectLettersInRows = (state) => state.alphabetLetters.lettersInRows;

export const selectShowValidationAlert = (state) => state.alphabetLetters.currentWord.showValidationAlert;

export const selectShowWordCountAlert = (state) => state.alphabetLetters.currentWord.showWordCountAlert;

export const selectIsValidWord = (state) => state.alphabetLetters.isValidWord;

export const 
{ inputLetter, 
    deleteLetter, 
    checkIfEnoughLetters, 
    hideValidityAlert, 
    matchLetters, 
    checkIsValidWord
} = alphabetLettersSlice.actions;

export default alphabetLettersSlice.reducer;