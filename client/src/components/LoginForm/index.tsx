import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import { FormContainer } from "./styles";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    signIn(userData);
  };

  return (
    <FormContainer onSubmit={handleLoginSubmit}>
      <Input
        type="email"
        name="userMail"
        labelValue="Email"
        placeholder="Digite o seu email"
        isRequired
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        type="password"
        name="userPassword"
        labelValue="Senha"
        placeholder="Digite a sua senha"
        isRequired
        onChange={(event) => setPassword(event.target.value)}
      />

      <SubmitButton>Fazer login</SubmitButton>
    </FormContainer>
  );
};

export default LoginForm;
