import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../Services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [errorMessageHome, setErrorMessageHome] = useState("");
  const [loadingHome, setLoadingHome] = useState(false);
  const getTrendingMoviesAsync = async () => {
    setLoadingHome(true);
    try {
      const { results } = await getTrendingMovies();
      setData(results);
    } catch (e) {
      console.log("Error occurred:", e.message);
    } finally {
      setLoadingHome(false);
    }
  };
  useEffect(() => {
    getTrendingMoviesAsync();
  }, []);

  return (
    <MovieList
      title={"Trending today"}
      list={data}
      errorMessage={errorMessageHome}
      isLoading={loadingHome}
    />
  );
};

export default HomePage;
