import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "../components/Search";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

const theme = {
  colors: { primary: "#faf4e4", secondary: "#19886b", tertiary: "#d1e7e1" },
  fontSizes: { title: "clamp(1.25rem, 5vw, 4rem)", body: "1rem" },
};

describe("<Seach />", () => {
  test("Renders searchbar, languages filter, and sort", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Search />
        </ThemeProvider>
      </BrowserRouter>
    );

    const id = document.querySelector("#SearchBar");
    expect(id).toBeInTheDocument();
  });

  test("Types text in search box and navigates to /search", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Search />
        </ThemeProvider>
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText("Search...");

    userEvent.type(input, "star trek");
    expect(screen.getByPlaceholderText("Search...")).toHaveValue("star trek");

    userEvent.type(input, `{enter}`);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});
