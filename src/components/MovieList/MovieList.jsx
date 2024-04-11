import TrendingItem from "../TrendingItem/TrendingItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./MovieList.style";
import Loader from "../Loader/Loader";

const MovieList = ({ title, list, errorMessage, isLoading }) => {
  return (
    <>
      {title && <S.Title>{title}</S.Title>}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {list.map(({ original_title, id }) => {
            return <TrendingItem id={id} key={id} name={original_title} />;
          })}
        </ul>
      )}
    </>
  );
};

export default MovieList;
