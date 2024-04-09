import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TIMEOUT = 1000 * 30;

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGRjMDJmZjMzZTY2ZjdlZjhkYWVmY2JkMjlmNjViNiIsInN1YiI6IjY2MGZjZmIxNzRkNmMwMDE2M2Q4ZjZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bds0ssRkYHukEx4M_xEBDexeBbPfcVNLuo6UuNOF5t8",
  },
});

// Встановлення обробника помилок для всіх запитів через інстанс Axios
instance.interceptors.response.use((response) => {
  // Обробка успішної відповіді
  return response;
});
//виклик додаткової обробки
