export const Key = ({ letter, letterStatus }) => {
    return (
        <button
            className="key"
        >
            {letter.toUpperCase()}
        </button>
    )
}