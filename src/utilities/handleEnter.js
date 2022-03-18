import { targetWord } from "../env/words";
import { checkIsLetter, matchLetters, checkIfEnoughLetters, checkIsValidWord } from "../features/alphabetLetters/alphabetLettersSlice";

export const handleEnter = (letterArray, dispatch) => {
  const wordStr = letterArray.join("");
  const noEmptyStr = letterArray.filter(el => el !== "");
  if (noEmptyStr.length > 0) {
    if (noEmptyStr.length === 5) {
      const actionPayload = { currentRowLetters: letterArray, targetWord: targetWord };
      const dispatchChaining = async () => {
          const thunkObj = await Promise.race([dispatch(checkIsLetter(wordStr))]);
          if (!thunkObj.payload) {
            dispatch(checkIsValidWord(true));
            dispatch(matchLetters(actionPayload));
          } 
      }
      dispatchChaining();
  } else {
      dispatch(checkIfEnoughLetters());
      setTimeout(() => dispatch(checkIfEnoughLetters()), 1000);
    }
  }
};