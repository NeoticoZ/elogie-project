import { InputContainer } from "./styles";

interface InputProps {
  type: string;
  name: string;
  labelValue: string;
  placeholder?: string;
  isRequired?: boolean;
  inputValue?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  labelValue,
  placeholder,
  isRequired,
  inputValue,
}) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{labelValue}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        aria-placeholder={placeholder}
        required={isRequired}
        aria-required={isRequired}
        value={inputValue}
      />
    </InputContainer>
  );
};

export default Input;
