import React, { Suspense, useEffect, useRef, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getMovieDetails } from "../../Services/api";
import { Link, Outlet, Route, useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { NotFound } from "../../components/NotFound/NotFound";
import * as S from "./MovieDetailsPage.style";

const MovieDetailsPage = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [statusCode, setStatusCode] = useState(null);

  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const ref = useRef(location.state ?? "/");

  const getMovieDetailsAsync = async () => {
    setLoading(true);
    try {
      const data = await getMovieDetails(movieId);
      setData(data);
    } catch (e) {
      setErrorMessage(e.message);
      setStatusCode(e.response.status);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetailsAsync();
  }, [movieId]);

  return (
    <>
      <S.GoBack to={ref.current}>Back</S.GoBack>
      {errorMessage && statusCode !== 404 && (
        <ErrorMessage message={errorMessage} />
      )}
      {statusCode === 404 && <NotFound errorMessage={errorMessage} />}
      {loading ? (
        <Loader />
      ) : (
        data && (
          <MovieCard
            backdrop_path={data.backdrop_path}
            title={data.title}
            overview={data.overview}
            genres={data.genres}
            vote_average={data.vote_average}
          />
        )
      )}
      <>
        <S.List>
          <li>
            <S.StyledLinkCast to="cast">Cast</S.StyledLinkCast>
          </li>
          <li>
            <S.StyledLinkReviews to="reviews">Reviews</S.StyledLinkReviews>
          </li>
        </S.List>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};

export default MovieDetailsPage;
