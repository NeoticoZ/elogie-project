import styled from "styled-components";

export const DashboardContainer = styled.main``;

export const DashboardContentWrapper = styled.section`
  max-width: 1260px;

  margin: 4rem auto;

  .dashboard-title {
    text-align: center;
  }

  @media (max-width: 1260px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const UserCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  gap: 0.5rem;

  margin-top: 2rem;
`;

export const UserCard = styled.div`
  width: 100%;
  height: auto;

  background: var(--bs-white);

  box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 0.05);
  -webkit-box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 0.05);

  border-radius: 4px;

  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  .fake-avatar {
    width: 3rem;
    height: 3rem;

    background: var(--bs-gray-500);

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    text-transform: uppercase;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .user-name {
    font-size: 0.95rem;
  }

  .user-email {
    font-size: 0.875rem;
  }
`;
