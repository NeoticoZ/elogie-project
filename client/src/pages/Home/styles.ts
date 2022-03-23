import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;

  background: var(--bs-white);

  overflow-x: hidden;
`;

export const HomeContentWrapper = styled.section`
  max-width: 1260px;

  margin: 0 auto;

  @media (max-width: 1260px) {
    margin: 0 2rem;
  }
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 1rem;

  a {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    a {
      font-size: 2.8rem;
    }
  }
`;

export const HomeHeroContent = styled.div`
  width: 100%;

  margin: 4rem 0;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1.5rem;
  }

  a {
    width: 13rem;
    height: 3.5rem;

    font-size: 1.2rem;

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

  .buttons-wrapper {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 2.9rem;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 1.3rem;
    }

    .buttons-wrapper {
      margin: 0 auto;

      a {
        width: 10rem;
      }
    }
  }
`;
