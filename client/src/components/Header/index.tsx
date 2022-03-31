import ElogieLogo from "../ElogieLogo";
import { HeaderContainer, HeaderWrapper } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ElogieLogo />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
