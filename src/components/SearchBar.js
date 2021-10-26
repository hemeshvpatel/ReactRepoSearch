import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useHistory, withRouter } from "react-router-dom";

const Container = styled.div``;

const SearchInputs = styled.div`
  ${({ theme }) => css`
    display: flex;
    border: 2px solid ${theme.colors.primary};
    border-radius: 10px;
    padding: 0.25rem;
  `}
`;

const SearchInput = styled.input`
  ${({ theme }) => css`
    border: 0;
    font-size: 1rem;
    outline: none;
    background-color: transparent;
    text-overflow: ellipsis;
    max-width: 35rem;
    color: ${theme.colors.primary};

    ::placeholder {
      color: ${theme.colors.primary};
    }
  `}
`;
const Icon = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.tertiary};
    }
  `}
`;

function SearchBar({ value = "", placeholder, onSubmit }) {
  const [input, setInput] = useState(value);
  const history = useHistory();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const routeChange = (input) => {
    let path = `/search/${input}`;
    history.push(path);
  };

  //trigger handleSubmit only when enter button is pressed within search input field or search icon is clicked
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.currentTarget.title === "search") {
      input ? handleSubmit() : alert("Please enter search term to get results");
    }
  };

  const handleSubmit = () => {
    routeChange(input);
    onSubmit(input);
  };

  return (
    <Container id={"SearchBar"}>
      <SearchInputs>
        <SearchInput
          type="text"
          value={input || ""}
          placeholder={placeholder}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
        <Icon>{input && <MdClear value="" onClick={handleInput} />}</Icon>
        <Icon title={"search"} onClick={handleKeyPress}>
          <FaSearch />
        </Icon>
      </SearchInputs>
    </Container>
  );
}

export default withRouter(SearchBar);
