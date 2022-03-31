import styled from "styled-components";

export const RegisterContainer = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContentWrapper = styled.section`
  max-width: 30rem;
  width: 100%;

  margin: 1rem;

  background: var(--bs-white);

  border-radius: 4px;

  -webkit-box-shadow: 0px 0px 50px -35px rgb(0 0 0 / 40%);
  box-shadow: 0px 0px 50px -35px rgb(0 0 0 / 40%);
`;

export const LogoWrapper = styled.div`
  padding: 1rem 0;
  text-align: center;

  border-bottom: 1px solid var(--bs-gray-350);

  a {
    font-size: 2.5rem;
  }
`;

export const DescriptionParagraph = styled.p`
  text-align: center;
  margin-top: 1.2rem;
`;

export const RegisterContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.4rem;

  margin-bottom: 2.5rem;

  span {
    color: var(--bs-gray-600);
  }

  a {
    color: var(--bs-blue);
    text-decoration: none;
  }
`;
