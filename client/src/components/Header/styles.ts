import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6rem;

  background: var(--bs-white);

  border-bottom: 1px solid var(--bs-gray-350);
  box-shadow: 0px 0px 6px 2px rgb(0 0 0 / 0.05);
`;

export const HeaderWrapper = styled.div`
  max-width: 1260px;
  height: 100%;

  display: flex;
  align-items: center;

  margin: 0 auto;

  a {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    width: auto;

    a {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 1260px) {
    margin: 0 2rem;
  }
`;
