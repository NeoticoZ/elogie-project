import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { Container, Content } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="logo">
          <Link to="/">
            Elogie<span>+</span>
          </Link>
        </div>

        <p className="description">É muito bom ter você de volta!</p>

        <LoginForm />
      </Content>
    </Container>
  );
};

export default Login;
