import axios from "axios";

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_DB_URL + '/api'
  });
};
