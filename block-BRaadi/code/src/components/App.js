import React from "react";
import Header from "./Header";
import Main from "./Main";
import ErrorBoundaries from "./ErrorBoundaries";

class App extends React.Component {
  render() {
    let { isDarkMode } = this.state;
    return (
      <>
        <ErrorBoundaries>
          <Header isDarkMode={isDarkMode} />
        </ErrorBoundaries>
        <ErrorBoundaries>
          <Main isDarkMode={isDarkMode} />
        </ErrorBoundaries>
      </>
    );
  }
}

export default App;
