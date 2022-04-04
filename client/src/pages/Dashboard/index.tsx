import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import {
  DashboardContainer,
  DashboardContentWrapper,
  UserCardWide,
  UsersCardWrapper,
  UserCard,
  EditIcon,
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
  const [isAdmin, setIsAdmin] = useState(false);

  const { user, signOut } = useAuth();

  const { token } = parseCookies();

  const navigate = useNavigate();

  function checkAdmin(user: User | null) {
    if (user?.admin) {
      setIsAdmin(true);
    }
  }

  useEffect(() => {
    checkAdmin(user);
  }, []);

  useEffect(() => {
    (async () => {
      if (token) {
        const response = await api.get("/users");
        const users = response.data;

        const filteredUsers = users.filter(
          (users: User) => users.name !== user?.name
        );

        setUsers(filteredUsers);
      } else {
        navigate("/login");
      }
    })();
  }, [user]);

  return (
    <DashboardContainer>
      <Header />

      <DashboardContentWrapper>
        <UserCard>
          <div className="fake-avatar">{user?.name?.[0]}</div>

          <strong className="user-name">{user?.name}</strong>

          <span className="user-email">{user?.email}</span>

          {user?.admin && <span className="user-admin">Administrador</span>}

          <button className="logout-button" onClick={signOut}>
            Sair
          </button>
        </UserCard>

        <UsersCardWrapper>
          {users.map((user) => (
            <UserCardWide key={user.id}>
              <div className="fake-avatar">{user.name[0]}</div>

              <div className="user-info">
                <strong className="user-name">{user.name}</strong>

                <span className="user-email">{user.email}</span>
              </div>

              {user.admin && <span className="user-admin">Admin</span>}

              <button className="compliment-button">Elogiar</button>

              <button className="see-compliments-button">Ver elogios</button>

              {isAdmin && <EditIcon />}
            </UserCardWide>
          ))}
        </UsersCardWrapper>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
