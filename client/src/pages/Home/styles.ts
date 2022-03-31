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

  @media (max-width: 500px) {
    h1 {
      font-size: 2.9rem;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 1.3rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  gap: 1rem;

  margin-top: 2rem;

  a {
    width: 13rem;
    font-size: 1.3rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    -ms-flex-direction: column;
    gap: 1rem;

    margin-top: 0.5rem;

    a {
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;
