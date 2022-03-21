import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonContainer type="submit">{children}</ButtonContainer>;
};

export default Button;
