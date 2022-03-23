import { Link } from "react-router-dom";
import ElogieLogo from "../../components/ElogieLogo";
import {
  Header,
  HomeContainer,
  HomeContentWrapper,
  HomeHeroContent,
} from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeContentWrapper>
        <Header>
          <ElogieLogo />
        </Header>

        <HomeHeroContent>
          <h1>Projeto Elogie +</h1>

          <p>
            Elogiar tem o poder de transformar relações, de reconhecer e
            valorizar companheiros, melhorando a convivência entre todos.
          </p>

          <p>Faça a diferença no seu time!</p>

          <div className="buttons-wrapper">
            <Link to="/register">Comece agora</Link>

            <Link className="outline" to="/login">
              Fazer login
            </Link>
          </div>
        </HomeHeroContent>
      </HomeContentWrapper>
    </HomeContainer>
  );
};

export default Home;
