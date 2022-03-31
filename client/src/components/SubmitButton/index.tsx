import { FormEvent, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: ReactNode;
  onSubmit?: (event: FormEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onSubmit }) => {
  return (
    <ButtonContainer type="submit" onSubmit={onSubmit}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
