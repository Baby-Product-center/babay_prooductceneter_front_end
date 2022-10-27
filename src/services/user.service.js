import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";
const API_URL_USER = "http://localhost:8080/products/getall";


const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};
const getProductList = () => {
    return axios.get(API_URL_USER , { headers: authHeader() });
};

const UserService = {
    getPublicContent,
    getUserBoard,
    getProductList
};

export default UserService;