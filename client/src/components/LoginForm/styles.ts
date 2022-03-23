import styled from "styled-components";

export const FormContainer = styled.form`
  margin: 1rem 2.5rem 0;

  div {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    gap: 0.4rem;

    & + div {
      margin-top: 1.2rem;
    }
  }

  button {
    margin: 2rem 0 1.5rem;
  }
`;
