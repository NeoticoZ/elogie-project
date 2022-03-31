import { parseCookies } from "nookies";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ElogieLogo from "../../components/ElogieLogo";
import LoginForm from "../../components/LoginForm";
import {
  DescriptionParagraph,
  LoginContainer,
  LoginContentFooter,
  LoginContentWrapper,
  LogoWrapper,
} from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const cookies = parseCookies();

  useEffect(() => {
    if (cookies.token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <LoginContainer>
      <LoginContentWrapper>
        <LogoWrapper>
          <ElogieLogo />
        </LogoWrapper>

        <DescriptionParagraph>
          É muito bom ter você de volta!
        </DescriptionParagraph>

        <LoginForm />

        <LoginContentFooter>
          <span>Ainda não tem conta?</span>
          <Link to="/register">Cadastre-se</Link>
        </LoginContentFooter>
      </LoginContentWrapper>
    </LoginContainer>
  );
};

export default Login;
