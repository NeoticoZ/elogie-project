import styled from "styled-components";

export const FormContainer = styled.form`
  margin: 1rem 2.5rem 2.5rem;

  div {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    gap: 0.4rem;

    & + div {
      margin-top: 1.2rem;
    }

    &.row {
      flex-direction: row;
      align-items: center;

      span {
        color: var(--bs-gray-600);
      }

      a {
        color: var(--bs-blue);
        text-decoration: none;
      }
    }

    &.align-center {
      justify-content: center;
    }
  }

  button {
    margin: 2rem 0 1.5rem;
  }
`;
