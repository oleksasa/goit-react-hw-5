import React, { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../Services/api";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [errorMessageReviews, setErrorMessageReviews] = useState("");
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const getMovieReviewsAsync = async () => {
    setReviewsLoading(true);
    try {
      const reviews = await getMovieReviews(movieId);
      setReviews(reviews.results[0]?.content);
    } catch (e) {
      setErrorMessageReviews(e.message);
    } finally {
      setReviewsLoading(false);
    }
  };

  useEffect(() => {
    getMovieReviewsAsync();
  }, [movieId]);

  return (
    <>
      {reviewsLoading ? (
        <Loader />
      ) : (
        <>
          {errorMessageReviews && (
            <ErrorMessage message={errorMessageReviews} />
          )}
          {reviews && reviews.length > 0 ? (
            <div>
              <p>{reviews}</p>
            </div>
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </>
      )}
    </>
  );
};

export default MovieReviews;
