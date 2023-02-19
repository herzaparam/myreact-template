import axios from "axios";
import axiosApiInstance from "../utils/axios";
import { posts } from "../constants/postEx";

const backendURL = import.meta.env.VITE_BACKEND_URL;

export const getData = (endpoint, callback, errCallback) => {
  axios
    .get(`${backendURL}${endpoint}`)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch(() => {});
};

export const getDataWithAuth = (endpoint, callback, errCallback) => {
  axiosApiInstance
    .get(`${backendURL}${endpoint}`)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch(() => {});
};
