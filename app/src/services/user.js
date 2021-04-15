import axios from "./axios";

export const getUser = (user) => {
  return axios
    .post("/users", { user })
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};
