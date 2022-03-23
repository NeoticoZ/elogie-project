import Input from "../Input";
import SubmitButton from "../SubmitButton";
import { FormContainer } from "./styles";

const LoginForm: React.FC = () => {
  return (
    <FormContainer>
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

      <SubmitButton>Fazer login</SubmitButton>
    </FormContainer>
  );
};

export default LoginForm;
