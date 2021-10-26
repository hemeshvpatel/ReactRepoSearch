import React from "react";
import styled, { css } from "styled-components";
import SearchBar from "./SearchBar";
import { GoMarkGithub as GithubIcon } from "react-icons/go";
import { useHistory, withRouter } from "react-router-dom";

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  `}
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.title};
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 1rem;
  `}
`;

function Landing() {
  const history = useHistory();

  //Route to Search component on submit and update url params with input value
  const routeChange = (input) => {
    let path = `/search/${input}`;
    history.push(path);
  };

  return (
    <Container id="Filters">
      <Wrapper>
        <Title>
          <GithubIcon /> Github Repository Search
        </Title>
        <SearchBar placeholder="Search..." onSubmit={routeChange} />
      </Wrapper>
    </Container>
  );
}

export default withRouter(Landing);
