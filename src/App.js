import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useRecoilState } from "recoil";
import { ThemeState } from "./components/atoms/themeatom";

function App() {
  const [changedTheme, setChangedTheme] = useRecoilState(ThemeState);
  // const storedTheme = localStorage.getItem("CHOSEN_THEME");
  // console.log("theme is",storedTheme);
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
