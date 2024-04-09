import React, { useEffect, useState } from "react";
import * as S from "./NotFound.style";
import { Navigate } from "react-router-dom";

export const NotFound = ({ errorMessage }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <S.NotFound>Page not found</S.NotFound>
      <h2>You will be redirected to Home in {5 - timer} seconds</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <S.LinkHome to="/">Home</S.LinkHome>
    </div>
  );
};
