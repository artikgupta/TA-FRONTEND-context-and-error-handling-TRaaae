import React from "react";
import ModeContext from "./ModeContext";

export default function SwitchButton({ isDarkMode, changeMode }) {
  return (
    <ModeContext.Consumer>
      {(isDarkMode) => (
        <button
          className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
          onClick={changeMode}
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      )}
    </ModeContext.Consumer>
  );
}
