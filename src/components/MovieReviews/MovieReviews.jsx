import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieReviews = ({ reviews, errorMessage }) => {
  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div>
        <p>{reviews}</p>
      </div>
    </>
  );
};

export default MovieReviews;
