import React from "react";
import styled, { css } from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { DivFlexCenter } from "../globals/styles";

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  `}
`;

const Wrapper = styled(DivFlexCenter)`
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: 100vh;
`;

const Title = styled(DivFlexCenter)`
  ${({ theme }) => css`
    font-size: clamp(0.5rem, 50% + 1rem, 1.25rem);

    @media screen and (min-width: ${theme.mediaQueryLarge}) {
      font-size: clamp(2rem, 50% + 1rem, 5rem);
    }
  `}
`;

const Gif = styled.img`
  width: 50%;
  height: auto;
`;

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    width: 10rem;
    border: 2px solid ${theme.colors.secondary};
    border-radius: 10px;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${theme.colors.secondary};
    text-decoration: none;

    &:hover {
      background-color: ${theme.colors.tertiary};
    }
  `}
`;

function Error() {
  return (
    <>
      <Container id="Error">
        <Wrapper>
          <Title>Oh no, looks like something went wrong...</Title>
          <Gif src={process.env.PUBLIC_URL + "/redAlert.gif"} />
          <StyledLink to="/">Back Home</StyledLink>
        </Wrapper>
      </Container>
    </>
  );
}

export default withRouter(Error);
