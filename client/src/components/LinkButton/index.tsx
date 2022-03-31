import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LinkButtonContainer } from "./styles";

interface LinkButtonProps {
  to: string;
  children: ReactNode;
  outline?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children, outline }) => {
  return (
    <LinkButtonContainer>
      <Link className={outline ? "outline" : ""} to={to}>
        {children}
      </Link>
    </LinkButtonContainer>
  );
};

export default LinkButton;
