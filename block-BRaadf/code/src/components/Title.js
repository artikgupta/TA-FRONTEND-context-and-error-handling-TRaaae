import ModeContext from "./ModeContext";

function Title({ text }) {
  return (
    <ModeContext.Consumer>
      {(isDarkMode) => (
        <h2
          className={`heading ${
            isDarkMode ? "sub-heading-dark" : "sub-heading-light"
          }`}
        >
          {text}
        </h2>
      )}
    </ModeContext.Consumer>
  );
}

export default Title;
