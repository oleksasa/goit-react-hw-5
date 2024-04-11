import React from "react";

import * as S from "./MovieCastItem.style";

const MovieCastItem = ({ profile_path, name, character }) => {
  return profile_path !== null ? (
    <S.ItemProfile>
      <S.ImgProfile
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
      />
      <S.Name>{name}</S.Name>
      <S.Character>{character}</S.Character>
    </S.ItemProfile>
  ) : null;
};

export default MovieCastItem;
