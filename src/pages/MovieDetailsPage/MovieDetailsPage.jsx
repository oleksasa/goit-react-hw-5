import React, { Suspense, useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
} from "../../Services/api";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../Loader/Loader";
import { NotFound } from "../../NotFound/NotFound";
import * as S from "./MovieDetailsPage.style";

const MovieDetailsPage = () => {
  const [data, setData] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const { pathname } = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [statusCode, setStatusCode] = useState(null);
  const [errorMessageCast, setErrorMessageCast] = useState("");
  const [errorMessageReviews, setErrorMessageReviews] = useState("");
  const [loading, setLoading] = useState(false);
  const [castLoading, setCastLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);

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

  const getMovieReviewsAsync = async () => {
    setReviewsLoading(true);
    try {
      const reviews = await getMovieReviews(movieId);
      setReviews(reviews.results[0].content);
    } catch (e) {
      setErrorMessageReviews(e.message);
    } finally {
      setReviewsLoading(false);
    }
  };
  useEffect(() => {
    getMovieDetailsAsync();
  }, []);

  useEffect(() => {
    if (pathname === `/movies/${movieId}/cast`) getMovieCastAsync();
    if (pathname === `/movies/${movieId}/reviews`) getMovieReviewsAsync();
  }, [pathname]);

  return (
    <>
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
      <S.StyledLinkCast to={`/movies/${movieId}/cast`}>Cast</S.StyledLinkCast>
      <S.StyledLinkReviews to={`/movies/${movieId}/reviews`}>
        Reviews
      </S.StyledLinkReviews>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/cast"
            element={
              castLoading ? (
                <Loader />
              ) : (
                <MovieCast cast={cast} errorMessage={errorMessageCast} />
              )
            }
          />
          <Route
            path="/reviews"
            element={
              reviewsLoading ? (
                <Loader />
              ) : reviews && reviews.length > 0 ? (
                <MovieReviews
                  reviews={reviews}
                  errorMessage={errorMessageReviews}
                />
              ) : (
                <p>We don't have any reviews for this movie</p>
              )
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
