import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchAPI = async (url) => {
  return httpInstance.get(url).then((res) => res.data);
};
