import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/random/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;