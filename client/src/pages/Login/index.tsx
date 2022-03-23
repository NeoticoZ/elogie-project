import { Link } from "react-router-dom";
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
