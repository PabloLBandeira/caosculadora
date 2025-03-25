import { ButtonContainer } from "./style";

const Button = ({ label, onClick, isOperator, isEqual }) => {
  return (
    <ButtonContainer onClick={onClick} type="button" isOperator={isOperator} isEqual={isEqual}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
