import axios from "axios";

const api = axios.create({
  baseURL: "/api/",
});

export const getBestSeats = async (data) => {
  const res = await api.post("best_seats", data);
  return res.data;
};

export default api;
