import { parseCookies } from "nookies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import LinkButton from "../../components/LinkButton";
import {
  ButtonsWrapper,
  HomeContainer,
  HomeContentWrapper,
  HomeHeroContent,
} from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const cookies = parseCookies();

  useEffect(() => {
    if (cookies.token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <HomeContainer>
      <Header />

      <HomeContentWrapper>
        <HomeHeroContent>
          <h1>Projeto Elogie +</h1>

          <p>
            Elogiar tem o poder de transformar relações, de reconhecer e
            valorizar companheiros, melhorando a convivência entre todos.
          </p>

          <p>Faça a diferença no seu time!</p>

          <ButtonsWrapper>
            <LinkButton to="/register">Comece agora</LinkButton>

            <LinkButton outline to="/login">
              Fazer login
            </LinkButton>
          </ButtonsWrapper>
        </HomeHeroContent>
      </HomeContentWrapper>
    </HomeContainer>
  );
};

export default Home;
