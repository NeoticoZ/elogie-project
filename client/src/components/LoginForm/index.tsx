import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import { FormContainer } from "./styles";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, user } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    signIn(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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

      <SubmitButton>Fazer login {user?.name}</SubmitButton>
    </FormContainer>
  );
};

export default LoginForm;
