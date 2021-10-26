import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Landing from "./components/Landing";
import Search from "./components/Search";
import RepoDetail from "./components/RepoDetail";
import Error from "./components/Error";

const GlobalStyle = createGlobalStyle`
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

const theme = {
  colors: { primary: "#faf4e4", secondary: "#19886b", tertiary: "#d1e7e1" },
  fontSizes: { title: "clamp(1.25rem, 5vw, 4rem)", body: "1rem" },
  mediaQuerySmall: "320px",
  mediaQueryMedium: "600px",
  mediaQueryLarge: "800px",
};

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/error" component={Error} />
          <Route path="/repository/*" component={RepoDetail} />
          <Route path="/search/:q" component={Search} />
          <Route exact path="/" component={Landing} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
