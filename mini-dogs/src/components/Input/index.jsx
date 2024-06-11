import * as S from "./styles";

const Input = ({ label, id, ...props }) => {
  return (
    <S.Field>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </S.Field>
  );
};

export default Input;
