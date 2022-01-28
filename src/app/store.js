import { configureStore } from '@reduxjs/toolkit';
import alphabetLettersReducer from '../features/alphabetLetters/alphabetLettersSlice';

export const store = configureStore({
  reducer: {
    alphabetLetters: alphabetLettersReducer
  },
});
      