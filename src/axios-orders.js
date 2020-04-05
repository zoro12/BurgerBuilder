import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-99b68.firebaseio.com/",
});

export default instance;
