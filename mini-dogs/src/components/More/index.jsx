// Styles
import * as S from "./styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos } from "../../redux/reducers/photos";
import { Loading } from "../Loading/styles";

const More = () => {
  const dispatch = useDispatch();
  const { pages, more, loading } = useSelector((state) => state.photos);

  function handleClick() {
    dispatch(loadPhotos(pages + 1));
  }

  if (!more) return null;
  if (loading) return <Loading />;
  return <S.More onClick={handleClick}>+</S.More>;
};

export default More;
