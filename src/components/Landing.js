import React from "react";
import styled, { css } from "styled-components";
import SearchBar from "./SearchBar";
import { GoMarkGithub as GithubIcon } from "react-icons/go";
import { useHistory, withRouter } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
import { DivFlexCenter } from "../globals/styles";

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  `}
`;

const Wrapper = styled(DivFlexCenter)`
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled(DivFlexCenter)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.title};
    gap: 1rem;
  `}
`;

const SecretLI = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 2rem;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

function Landing() {
  const history = useHistory();

  //Route to Search component on submit and update url params with input value
  const routeChange = (input) => {
    let path = `/search/${input}`;
    history.push(path);
  };

  //Hidden link to my LinkedIn
  const LIurl = "https://www.linkedin.com/in/hemeshvpatel/";

  return (
    <Container id="Filters">
      <Wrapper>
        <Title>
          <GithubIcon /> Github Repository Search
        </Title>
        <SearchBar placeholder="Search..." onSubmit={routeChange} />
        <SecretLI href={LIurl} target="_blank" rel="noopener noreferrer">
          <FaUserSecret />
        </SecretLI>
      </Wrapper>
    </Container>
  );
}

export default withRouter(Landing);
