import { atom } from "recoil";

export const ThemeState = atom({
  key: "themeState",
  default: {
    body: "#FFF8E6",
    text: "#6a040f",
    highlight: "#ffba08",
    dark: "#03071e",
    secondaryText: "#964F56",
    imageHighlight: "#dc2f02",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#9d0208",
    headerColor: "#dc2f0277",
  },
});
