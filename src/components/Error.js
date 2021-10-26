import React from "react";
import styled, { css } from "styled-components";
import { withRouter, Link } from "react-router-dom";

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  height: 100vh;
`;

const Title = styled.div`
  ${({ theme }) => css`
    font-size: clamp(0.5rem, 50% + 1rem, 1.25rem);
    min-height: 2rem;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: center;

    @media screen and (min-width: 800px) {
      font-size: clamp(2rem, 50% + 1rem, 5rem);
    }
  `}
`;

const Gif = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: auto;
`;

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secondary};
    border: 3px solid;
    border-radius: 10px;
    padding: 0.25rem;

    &:hover {
      color: red;
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
