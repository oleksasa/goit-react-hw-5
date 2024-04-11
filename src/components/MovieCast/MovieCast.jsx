import React, { useEffect, useState } from "react";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./MovieCast.style";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../Services/api";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [castLoading, setCastLoading] = useState(false);
  const [errorMessageCast, setErrorMessageCast] = useState("");
  const getMovieCastAsync = async () => {
    setCastLoading(true);
    try {
      const { cast } = await getMovieCredits(movieId);
      setCast(cast);
    } catch (e) {
      setErrorMessageCast(e);
    } finally {
      setCastLoading(false);
    }
  };

  useEffect(() => {
    getMovieCastAsync();
  }, [movieId]);

  return (
    <>
      {errorMessageCast && <ErrorMessage message={errorMessageCast} />}
      {castLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default MovieCast;
