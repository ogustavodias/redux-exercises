import * as S from "./styles";
import imgTest from "../../assets/login-800344e4.jpg";

const Photos = () => {
  return (
    <S.Photos>
      <S.Item>
        <img src={imgTest} alt="" />
        <span>Joel</span>
        <span>11350</span>
      </S.Item>
    </S.Photos>
  );
};

export default Photos;
