import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f6d1b.cloudfunctions.net/api",
  //"http://localhost:5001/clone-f6d1b/us-central1/api"
});

export default instance;
