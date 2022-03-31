import { Link } from "react-router-dom";
import { ElogieLogoContainer } from "./styles";

const ElogieLogo: React.FC = () => {
  return (
    <ElogieLogoContainer>
      <Link to="/">
        Elogie<span>+</span>
      </Link>
    </ElogieLogoContainer>
  );
};

export default ElogieLogo;
