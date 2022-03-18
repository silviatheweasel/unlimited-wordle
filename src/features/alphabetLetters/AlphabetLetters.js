import { useSelector } from "react-redux";
// import { selectCurrentWord, selectAlphabetStatus } from "./alphabetLettersSlice";

import { selectIsValidWord, sselectIsValidWord } from "./alphabetLettersSlice";

import { Keyboard } from "../../containers/Keyboard";

export const AlphabetLetters = () => {
    // const alphabetStatus = useSelector(selectAlphabetStatus);
    // const currentWord = useSelector(selectCurrentWord);

    return (
    <div>
        <Keyboard />
    </div>)
}