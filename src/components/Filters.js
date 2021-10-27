import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { IoMdClose } from "react-icons/io";
import { sortLanguages } from "../globals/utils";

const Container = styled.div`
  ${({ theme }) => css`
    width: 20%;
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
    border-right: 1px solid ${theme.colors.secondary};

    @media screen and (max-width: 800px) {
      display: none;
    }
  `}
`;

const Title = styled.div`
  font-weight: 900;
  margin-bottom: 1rem; ;
`;

const Language = styled.div`
  ${({ theme }) => css`
    margin-left: 1rem;
    padding: 0.25rem;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    background-color: ${({ active }) =>
      active ? theme.colors.tertiary : null};
    gap: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.tertiary};
    }
  `}
`;

const LanguageName = styled.div``;
const LanguageCount = styled.div``;
const ClearButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10001;

    &:hover {
      background-color: ${theme.colors.tertiary};
    }
  `}
`;

export default function Filters({ data, handleFilter, setFilterActive }) {
  const [sortedLangs, setSortedLangs] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let sortedLanguages = sortLanguages(data);
    setSortedLangs(sortedLanguages);
  }, [data, selected]);
  if (!data) {
    return null;
  }
  return (
    <Container id="Filters">
      <Title>Languages:</Title>
      {sortedLangs &&
        (sortedLangs || []).map((item) => {
          return (
            <Language
              key={item.label}
              onClick={(e) => {
                if (e.target.name === "clearButton") {
                  e.stopPropagation();
                } else {
                  setFilterActive(true);
                  setSelected(item.label);
                  handleFilter(item.label);
                }
              }}
              active={selected === item.label}
            >
              <LanguageName>{item.label}</LanguageName>
              {selected === item.label ? (
                <ClearButton>
                  <IoMdClose
                    name="clearButton"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFilterActive(false);
                      setSelected(null);
                      handleFilter("clear");
                    }}
                  />
                </ClearButton>
              ) : (
                <LanguageCount>{item.count}</LanguageCount>
              )}
            </Language>
          );
        })}
    </Container>
  );
}
