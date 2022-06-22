import React, { useEffect, useState } from "react";
// import { ThemeColors } from "/ThemeColorContext";

import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import { useRecoilState } from "recoil";
import { ThemeState } from "../atoms/themeatom";

export const ThemeColors = {
  Blue_Theme: {
    body: "#EDF9FE",
    text: "#001C55",
    highlight: "#A6E1FA",
    dark: "#00072D",
    secondaryText: "#7F8DAA",
    imageHighlight: "#0E6BA8",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#0A2472",
    headerColor: "#0E6BA877",
  },

  Brown_Theme: {
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

  Purple_Theme: {
    body: "#F8EFF4",
    text: "#231942",
    highlight: "#E0B1CB",
    dark: "#00072D",
    secondaryText: "#655E7A",
    imageHighlight: "#BE95C4",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#5E548E",
    headerColor: "#BE95C477",
  },

  YellowGreen_Theme: {
    body: "#FFFFEB",
    text: "#003F2F",
    highlight: "#dddf00",
    dark: "#00072D",
    secondaryText: "#4CA58F",
    imageHighlight: "#55a630",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#007f5f",
    headerColor: "#55a63077",
  },

  Red_Theme: {
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

  Black_Theme: {
    body: "#E5E5E5",
    text: "#14213d",
    highlight: "#ffffff",
    dark: "#000000",
    secondaryText: "#5A6377",
    imageHighlight: "#fca311",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#8d99ae",
    headerColor: "#fca31177",
  },

  Pink_Theme: {
    body: "#FEE9F2",
    text: "#620E34",
    highlight: "#FBA7CD",
    dark: "#31071A",
    secondaryText: "#ef476f",
    imageHighlight: "#ef476f",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#8d99ae",
    headerColor: "#ef476f77",
  },

  Violet_Theme: {
    body: "#F4EEFC",
    text: "#430A58",
    highlight: "#D6BEF4",
    dark: "#21052C",
    secondaryText: "#875599",
    imageHighlight: "#9b5de5",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#763D8B",
    headerColor: "#9b5de577",
  },

  Green_Theme: {
    body: "#E6FAF5",
    text: "#084c61",
    highlight: "#9BEED8",
    dark: "#031E26",
    secondaryText: "#528190",
    imageHighlight: "#07beb8",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#56a3a6",
    headerColor: "#07beb877",
  },

  Orange_Theme: {
    body: "#FFF0EA",
    text: "#99401F",
    highlight: "#FFB59A",
    dark: "#33150A",
    secondaryText: "#CC552A",
    imageHighlight: "#FF6B35",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#d7263d",
    headerColor: "#FF6B3577",
  },
};

function ThemeToggler() {
  const [chooseTheme, setChooseTheme] = useRecoilState(ThemeState);
  // const [themeName, setThemeName] = React.useState("Red");
  // useEffect(() => {
  //   localStorage.setItem("CHOSEN_THEME", themeName);
  // }, [themeName]);

  return (
    <div
      style={{
        position: "fixed",
        // bottom: "1.2rem",
        top: "3.5rem",
        right: "1.5rem",
        cursor: "pointer",
        padding: "15px",
        outline: "none",
        borderRadius: "2rem",
        fontSize: "2rem",
        zIndex: "1",
      }}
    >
      <Menu
        direction={"left"}
        viewScroll={"auto"}
        overflow="auto"
        menuButton={<i className="fas fa-cog fa-spin" title="Theme"></i>}
        arrow={true}
      >
        <MenuRadioGroup
          value={chooseTheme}
          onRadioChange={(e) => setChooseTheme(e.value)}
        >
          {Object.keys(ThemeColors).map((key, index) => (
            <MenuItem
              className="hover"
              type="radio"
              key={key}
              value={ThemeColors[key]}
              style={{
                color: `${ThemeColors[key]["text"]}`,
                fontSize: "1.2rem",
              }}
            >
              {key.slice(0, -6)}
            </MenuItem>
          ))}
        </MenuRadioGroup>
      </Menu>
    </div>
  );
}

export default ThemeToggler;
