import React from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    @media screen and (min-width: 800px) {
      display: ${(props) => (props?.label === "Languages" ? "none" : 0)};
    }
  `}
`;

const DropdownList = styled.select`
  ${({ theme }) => css`
    border-radius: 10px;
    border: 2px solid ${theme.colors.secondary};
    padding: 0.25rem;
    margin-bottom: 1rem;
    cursor: pointer;
  `}
`;

const Label = styled.label``;
const Option = styled.option``;

function Dropdown({ onChange, selected, setSelected, options, label }) {
  const handleSelect = (e) => {
    let currentSelection = e.currentTarget.value;
    setSelected(currentSelection);
    let dObject = options.filter((o) => o.label === currentSelection)[0];
    if (label === "Sort") {
      onChange({
        sort: dObject.sort,
        order: dObject.order,
      });
    } else {
      onChange(currentSelection);
    }
  };
  if (!options) {
    return null;
  }
  return (
    <Container label={label}>
      <Label>{`${label}: `}</Label>
      <DropdownList value={selected} onChange={handleSelect}>
        {options.map((d) => (
          <Option key={d.label} value={d.label}>
            {d.label}
          </Option>
        ))}
      </DropdownList>
    </Container>
  );
}

export default withRouter(Dropdown);
