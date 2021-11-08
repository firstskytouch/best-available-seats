import axios from "axios";

const api = axios.create({
  baseURL: "/api/",
});

export const getAllMovies = async () => {
  const res = await api.get("movie");
  return res.data;
};

export const createNewMovie = async (data) => {
  const res = await api.post("movie", data);
  return res.data;
};

export const getMovie = async (id) => {
  const res = await api.get(`movie/${id}`);
  return res.data;
};

export const deleteMovie = async (id) => {
  const res = await api.delete(`movie/${id}`);
  return res.data;
};

export default api;
