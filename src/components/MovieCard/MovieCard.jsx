import React from "react";
import * as S from "./MovieCard.style";

const MovieCard = ({
  backdrop_path,
  title,
  overview,
  genres,
  vote_average,
}) => {
  return (
    <S.Container>
      <S.Img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      ></S.Img>
      <S.Title>{title}</S.Title>
      <p>User score: {Math.round((vote_average / 10) * 100)}%</p>
      <h3>Overview</h3>
      <S.Text>{overview}</S.Text>
      <S.SmallTitle>Genres</S.SmallTitle>
      <S.List>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default MovieCard;
