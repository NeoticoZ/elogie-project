import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  max-width: 30rem;
  width: 100%;

  margin: 1rem;

  background: var(--bs-white);

  border-radius: 4px;

  -webkit-box-shadow: 0px 0px 50px -35px rgb(0 0 0 / 40%);
  box-shadow: 0px 0px 50px -35px rgb(0 0 0 / 40%);

  .logo {
    padding: 1rem 0;
    text-align: center;

    border-bottom: 1px solid var(--bs-gray-350);

    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 2.5rem;
      color: var(--bs-gray-900);

      span {
        color: var(--bs-blue);
      }
    }
  }

  .description {
    text-align: center;
    margin-top: 1.2rem;
  }
`;
