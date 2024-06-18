import React from "react";

// Styles
import * as S from "./styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos } from "../../redux/reducers/photos";
import { Loading } from "../../components/Loading/styles";
import More from "../../components/More";

const Photos = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(loadPhotos(1));
  }, [dispatch]);

  if (!photos.list) return <Loading />;

  return (
    <>
      <S.Photos>
        {photos.list.map((item) => {
          return (
            <S.Item key={item.id} className="anime">
              <img src={item.src} alt="" />
              <span>{item.title}</span>
              <span>{item.acessos}</span>
            </S.Item>
          );
        })}
      </S.Photos>
      <More />
    </>
  );
};

export default Photos;
