import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovie } from "../../Services/api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  async function getSearchMovieAsync(value) {
    try {
      setLoading(true);
      setMovies([]);
      const { results } = await getSearchMovie({
        query: value,
      });
      setMovies(results);
      if (results.length === 0)
        iziToast.show({
          color: "red",
          message: "Unfortunately, we did not find a film for your request",
          position: "topRight",
        });
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (query.trim() !== "") {
      getSearchMovieAsync(query);
    }
  }, [searchParams]);

  const handleSubmit = (value) => {
    if (value === "") {
      iziToast.error({
        title: "Error",
        message: "Enter the value before submitting.",
        position: "topRight",
      });
      return;
    }
    setSearchParams({
      query: value,
    });
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} query={searchParams.get("query")} />
      <MovieList
        list={movies}
        errorMessage={errorMessage}
        isLoading={loading}
      />
    </>
  );
};

export default MoviesPage;
