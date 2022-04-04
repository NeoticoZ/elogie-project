import { parseCookies } from "nookies";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ElogieLogo from "../../components/ElogieLogo";
import RegisterForm from "../../components/RegisterForm";
import { useAuth } from "../../hooks/useAuth";
import {
  DescriptionParagraph,
  LogoWrapper,
  RegisterContainer,
  RegisterContentFooter,
  RegisterContentWrapper,
} from "./styles";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAuth();

  const cookies = parseCookies();

  useEffect(() => {
    if (cookies.token) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, user]);

  return (
    <RegisterContainer>
      <RegisterContentWrapper>
        <LogoWrapper>
          <ElogieLogo />
        </LogoWrapper>

        <DescriptionParagraph>
          Parece que você é novo por aqui!
        </DescriptionParagraph>

        <RegisterForm />

        <RegisterContentFooter>
          <span>Já tem uma conta?</span>
          <Link to="/login">Fazer login</Link>
        </RegisterContentFooter>
      </RegisterContentWrapper>
    </RegisterContainer>
  );
};

export default Register;
