import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import {  useRecoilValue } from "recoil";
import { ThemeState } from "./components/atoms/themeatom";

function App() {
  const changedTheme = useRecoilValue(ThemeState);
  return (
    <ThemeProvider theme={changedTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={changedTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
