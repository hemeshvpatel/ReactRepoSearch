import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  box-sizing: border-box;
  font-family: "Sen", sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-height: -webkit-fill-available;
}

html {
  min-height: 100%;
  height: -webkit-fill-available;
}
`;

export const Theme = {
  colors: { primary: "#faf4e4", secondary: "#19886b", tertiary: "#d1e7e1" },
  fontSizes: { title: "clamp(1.25rem, 5vw, 4rem)", body: "1rem" },
  mediaQuerySmall: "320px",
  mediaQueryMedium: "600px",
  mediaQueryLarge: "800px",
};

export const DivFlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownLabel = styled.label`
  font-weight: 900;
`;
