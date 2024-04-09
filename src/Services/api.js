import { instance } from "./instance";

export function getTrendingMovies() {
  return instance.get("/trending/movie/day").then((res) => res.data);
}

export function getSearchMovie({ query }) {
  return instance
    .get("/search/movie", { params: { query } })
    .then((res) => res.data);
}

export function getMovieDetails(movie_id) {
  return instance.get(`/movie/${movie_id}`).then((res) => res.data);
}

export function getMovieCredits(movie_id) {
  return instance.get(`/movie/${movie_id}/credits`).then((res) => res.data);
}

export function getMovieReviews(movie_id) {
  return instance.get(`/movie/${movie_id}/reviews`).then((res) => res.data);
}
