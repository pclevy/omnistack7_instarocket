import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3333"
  baseURL: "http://192.168.0.16:3333" // IP local
  //baseURL: "http://110.0.3.2:3333"   // Emulador Genymotion
  //baseURL: "http://110.0.2.2:3333"   // Emulador Android Studio
});

export default api;
