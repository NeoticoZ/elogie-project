import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import {
  DashboardContainer,
  DashboardContentWrapper,
  UserCard,
  UserCardsWrapper,
} from "./styles";

interface User {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { user } = useAuth();

  const cookies = parseCookies();

  useEffect(() => {
    if (user) {
      api
        .get("/users", {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        })
        .then((response) => {
          setUsers(response.data);
        });
    }
  }, []);

  return (
    <DashboardContainer>
      <Header />

      <DashboardContentWrapper>
        <h1 className="dashboard-title">Usuários cadastrados</h1>

        <UserCardsWrapper>
          {users.map((user) => (
            <UserCard key={user.id}>
              <div className="fake-avatar">{user.name[0]}</div>

              <div className="user-info">
                <strong className="user-name">{user.name}</strong>

                <span className="user-email">{user.email}</span>
              </div>
            </UserCard>
          ))}
        </UserCardsWrapper>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
