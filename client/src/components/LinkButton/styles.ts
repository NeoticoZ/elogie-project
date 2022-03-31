import styled from "styled-components";

export const LinkButtonContainer = styled.div`
  a {
    width: 10rem;
    height: 3.3rem;

    text-decoration: none;
    border-radius: 6px;

    color: white;
    background: var(--bs-blue);

    display: flex;
    justify-content: center;
    align-items: center;

    &.outline {
      color: var(--bs-blue);
      background: var(--bs-white);

      border: 1.5px solid var(--bs-blue);
    }
  }
`;
