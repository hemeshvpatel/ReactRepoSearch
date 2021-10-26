import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Landing from "../components/Landing";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: { primary: "#faf4e4", secondary: "#19886b", tertiary: "#d1e7e1" },
  fontSizes: { title: "clamp(1.25rem, 5vw, 4rem)", body: "1rem" },
};

describe("<Landing />", () => {
  test("Renders application title text", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Landing />
        </ThemeProvider>
      </BrowserRouter>
    );
    const title = screen.getByText("Github Repository Search");
    expect(title).toBeInTheDocument();
  });

  test("Renders search box placeholder text", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Landing />
        </ThemeProvider>
      </BrowserRouter>
    );
    const searchPlaceholder = screen.getByPlaceholderText("Search...");
    expect(searchPlaceholder).toBeInTheDocument();
  });
});
