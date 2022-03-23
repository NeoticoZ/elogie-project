import { Link } from "react-router-dom";
import ElogieLogo from "../../components/ElogieLogo";
import {
  HomeContainer,
  HomeContentWrapper,
  HomeHeroTextContent,
  LogoWrapper,
} from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeContentWrapper>
        <LogoWrapper>
          <ElogieLogo />
        </LogoWrapper>

        <HomeHeroTextContent>
          <h1>Projeto Elogie +</h1>

          <p>
            Elogiar tem o poder de transformar relações, de reconhecer e
            valorizar companheiros, melhorando a convivência entre todos.
          </p>

          <p>Comece agora fazendo a diferença no seu time!</p>

          <Link to="/register">Criar uma conta</Link>
        </HomeHeroTextContent>
      </HomeContentWrapper>
    </HomeContainer>
  );
};

export default Home;
