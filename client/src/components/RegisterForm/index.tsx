import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import { FormContainer } from "./styles";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();

  const handleRegisterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    signUp(userData);
  };

  return (
    <FormContainer onSubmit={handleRegisterSubmit}>
      <Input
        type="text"
        name="userName"
        labelValue="Nome"
        placeholder="Digite o seu nome"
        isRequired
        onChange={(event) => setName(event.target.value)}
      />

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

      <SubmitButton>Cadastrar</SubmitButton>
    </FormContainer>
  );
};

export default RegisterForm;
