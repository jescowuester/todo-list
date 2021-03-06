import React, { Component } from "react";
import { Home } from "./pages";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-family: 'Open Sans', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
