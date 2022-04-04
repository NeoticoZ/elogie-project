import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ElogieLogo from "../ElogieLogo";
import { HeaderContainer, HeaderWrapper, NavigationLinks } from "./styles";

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ElogieLogo />

        {user?.admin && (
          <NavigationLinks>
            <Link className="link" to="/">
              Gerenciar elogios
            </Link>
          </NavigationLinks>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
