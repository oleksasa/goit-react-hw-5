import React, { useEffect, useState } from "react";
import TrendingMovies from "../../components/MoviesList/MoviesList";
import { getTrendingMovies } from "../../Services/api";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [errorMessageHome, setErrorMessageHome] = useState("");
  const [loadingHome, setLoadingHome] = useState("");
  const getTrendingMoviesAsync = async () => {
    try {
      const { results } = await getTrendingMovies();
      setData(results);
    } catch (e) {
      console.log("Error occurred:", e.message);
    }
  };
  useEffect(() => {
    getTrendingMoviesAsync();
  }, []);
  return (
    <TrendingMovies
      title={"Trending today"}
      list={data}
      errorMessage={errorMessageHome}
    />
  );
};

export default HomePage;
