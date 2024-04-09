import React from "react";
import MovieCastItem from "../../MovieCastItem/MovieCastItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./MovieCast.style";

const MovieCast = ({ cast, errorMessage }) => {
  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <S.ListCast>
        {cast?.map(({ profile_path, name, character, id }) => (
          <MovieCastItem
            key={id}
            profile_path={profile_path}
            name={name}
            character={character}
          />
        ))}
      </S.ListCast>
    </>
  );
};

export default MovieCast;
