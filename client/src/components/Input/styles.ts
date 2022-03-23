import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  gap: 0.4rem;

  label,
  input {
    color: var(--bs-gray-750);
  }

  input {
    width: 100%;
    height: 3.25rem;

    padding: 0 1rem;

    border-radius: 6px;
    -webkit-border-radius: 4px;

    border: 1px solid var(--bs-gray-350);

    transition: outline 0.03s linear;

    &:focus {
      outline: 3px solid rgba(var(--bs-primary-rgb), 0.8);
    }
  }
`;
