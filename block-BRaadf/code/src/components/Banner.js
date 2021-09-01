import React from "react";
import ModeContext from "./ModeContext";

class Banner extends React.Component {
  render() {
    return (
      <ModeContext.Consumer>
        {(isDarkMode) => (
          <div
            className={
              isDarkMode
                ? "message-dark message--banner message--success"
                : "message message--banner message--success"
            }
          >
            <h3 className="message-heading">This is a success banner!</h3>
            <p>
              It celebrates that you have successfully completed a major task.
            </p>
          </div>
        )}
      </ModeContext.Consumer>
    );
  }
}

export default Banner;
