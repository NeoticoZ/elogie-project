import Input from "../Input";
import SubmitButton from "../SubmitButton";
import { FormContainer } from "./styles";

const RegisterForm: React.FC = () => {
  return (
    <FormContainer>
      <Input
        type="text"
        name="userName"
        labelValue="Nome"
        placeholder="Digite o seu nome"
        isRequired
      />

      <Input
        type="email"
        name="userMail"
        labelValue="Email"
        placeholder="Digite o seu email"
        isRequired
      />

      <Input
        type="password"
        name="userPassword"
        labelValue="Senha"
        placeholder="Digite a sua senha"
        isRequired
      />

      <SubmitButton>Cadastrar</SubmitButton>
    </FormContainer>
  );
};

export default RegisterForm;
