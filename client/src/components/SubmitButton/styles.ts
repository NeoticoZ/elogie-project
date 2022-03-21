import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 3rem;

  background: var(--bs-blue);
  color: var(--bs-white);

  border-radius: 6px;
  -webkit-border-radius: 4px;

  &:hover {
    transition: filter 0.1s linear;

    filter: opacity(0.8);
  }

  &:focus {
    transition: outline 0.06s linear;

    outline: 4px solid rgba(var(--bs-primary-rgb), 0.4);
  }
`;
