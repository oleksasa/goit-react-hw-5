import TrendingItem from "../TrendingItem/TrendingItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./MovieList.style";

const TrendingMovies = ({ title, list, errorMessage }) => {
  return (
    <>
      {title && <S.Title>{title}</S.Title>}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      <ul>
        {list.map(({ original_title, id }) => {
          return <TrendingItem id={id} key={id} name={original_title} />;
        })}
      </ul>
    </>
  );
};

export default TrendingMovies;
