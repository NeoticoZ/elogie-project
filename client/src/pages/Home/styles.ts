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

export const LogoWrapper = styled.div`
  a {
    font-size: 2.5rem;
  }
`;

export const HomeHeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  gap: 2rem;

  margin-top: 4rem;

  h1 {
    font-size: 4rem;
  }

  a {
    width: 10rem;
    height: 2.5rem;

    text-decoration: none;
    border-radius: 6px;

    color: white;
    background: var(--bs-blue);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      text-align: center;
    }

    a {
      margin: 0 auto;
    }
  }
`;
