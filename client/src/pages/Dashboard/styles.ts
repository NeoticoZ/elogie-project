import styled from "styled-components";

import { FaRegEdit } from "react-icons/fa";

export const DashboardContainer = styled.main``;

export const DashboardContentWrapper = styled.section`
  max-width: 1260px;

  margin: 4rem auto;

  display: flex;
  gap: 4rem;

  @media (max-width: 1260px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const UsersCardWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  gap: 0.5rem;
`;

export const UserCard = styled.div`
  width: 30rem;
  height: 25rem;

  background: var(--bs-white);

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 0.05);
  -webkit-box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 0.05);
  -moz-box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 0.05);

  /* border-radius: 4px; */

  .fake-avatar {
    width: 8rem;
    height: 8rem;

    background: var(--bs-gray-300);

    border-radius: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 5rem;
    text-transform: uppercase;
  }

  .user-name {
    font-size: 1.5rem;
    color: var(--bs-gray-700);
  }

  .user-email {
    color: var(--bs-gray-600);
  }

  .user-admin {
    color: var(--bs-red);
    background: rgba(var(--bs-danger-rgb), 0.1);

    padding: 0.25rem 0.5rem;

    border-radius: 4px;

    font-size: 0.85rem;
  }

  .logout-button {
    color: var(--bs-red);
  }
`;

export const UserCardWide = styled.div`
  width: 100%;
  height: auto;

  background: var(--bs-white);

  box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 0.05);
  -webkit-box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 0.05);
  -moz-box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 0.05);

  /* border-radius: 4px; */

  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  transition: all 0.2s linear;

  .fake-avatar {
    width: 3rem;
    height: 3rem;

    background: var(--bs-gray-300);

    border-radius: 4rem;

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
    color: var(--bs-blue);
  }

  .user-email {
    font-size: 0.875rem;
    color: var(--bs-gray-600);
  }

  .user-admin {
    color: var(--bs-red);
    background: rgba(var(--bs-danger-rgb), 0.1);

    padding: 0.25rem 0.5rem;

    border-radius: 4px;

    font-size: 0.75rem;
  }

  .compliment-button {
    margin-left: auto;
    color: var(--bs-blue);
  }

  .see-compliments-button {
    color: var(--bs-gray-600);
  }

  &:hover {
    background: rgba(var(--bs-primary-rgb), 0.01);
    outline: 1px solid var(--bs-blue);
  }
`;

export const EditIcon = styled(FaRegEdit)`
  width: 1.2rem;
  height: 1.2rem;

  fill: var(--bs-dark);

  cursor: pointer;
`;
