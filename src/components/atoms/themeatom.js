import { atom } from "recoil";

export const ThemeState = atom({
  key: "themeState",
  default: {
    body: "#FFFEFD",
    text: "#5D2A42",
    highlight: "#FFF9EC",
    dark: "#00072D",
    secondaryText: "#8D697A",
    imageHighlight: "#E29F95",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#FB6376",
    headerColor: "#E29F9577",
  },
});
