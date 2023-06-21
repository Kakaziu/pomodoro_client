import axios from "axios";

const api = axios.create({
  baseURL: "https://pomodoro-790pahmju-kakaziu.vercel.app/",
});

export default api;
