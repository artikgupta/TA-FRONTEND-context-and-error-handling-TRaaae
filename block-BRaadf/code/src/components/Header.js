import ModeContext from "./ModeContext";

function Header() {
  return (
    <ModeContext.Consumer>
      {(isDarkMode) => (
        <h1
          className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </h1>
      )}
    </ModeContext.Consumer>
  );
}

export default Header;
