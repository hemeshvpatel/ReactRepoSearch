import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/Error";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: { primary: "#faf4e4", secondary: "#19886b", tertiary: "#d1e7e1" },
  fontSizes: { title: "clamp(1.25rem, 5vw, 4rem)", body: "1rem" },
};

describe("<App />", () => {
  test("Renders without crashing", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );
  });
});
