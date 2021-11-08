import axios from "axios";

const api = axios.create({
  baseURL: "/api/",
});

export const getAllGenres = async () => {
  const res = await api.get("genre");
  return res.data;
};

export const createNewGenre = async (data) => {
  const res = await api.post("genre", data);
  return res.data;
};

export const getGenre = async (id) => {
  const res = await api.get(`genre/${id}`);
  return res.data;
};

export const deleteGenre = async (id) => {
  const res = await api.delete(`genre/${id}`);
  return res.data;
};

export default api;
