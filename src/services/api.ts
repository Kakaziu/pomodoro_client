import axios from "axios";

const api = axios.create({
  // baseURL: "https://pomodoro-api-crav-81wbq5c0u-kakazius-projects.vercel.app/",
  baseURL: "http://localhost:3000/",
});

export default api;
