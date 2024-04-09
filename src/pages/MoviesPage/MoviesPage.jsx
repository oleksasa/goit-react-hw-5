import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import TrendingMovies from "../../components/MoviesList/MoviesList";
import { getSearchMovie } from "../../Services/api";
import Loader from "../../Loader/Loader";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [value, setValue] = useState("");

  async function getSearchMovieAsync(value) {
    try {
      setLoading(true);
      setMovies([]);
      const { results } = await getSearchMovie({
        query: value,
      });
      setMovies(results);
      if (results.length === 0)
        iziToast.error({
          title: "Error",
          message: "Введи існуючий фільм",
          position: "topRight",
        });
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (value.trim() !== "") {
      getSearchMovieAsync(value);
    }
  }, [value]);

  const handleSubmit = (value) => {
    if (value === "") {
      iziToast.error({
        title: "Error",
        message: "Enter the value before submitting.",
        position: "topRight",
      });
      return;
    }
    setMovies([]);
    setValue(value);
  };

  return (
    <>
      {loading ? <Loader /> : <SearchBar onSubmit={handleSubmit} />}
      <TrendingMovies list={movies} errorMessage={errorMessage} />
    </>
  );
};

export default MoviesPage;
