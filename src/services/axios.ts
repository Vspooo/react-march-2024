import axios from "axios";
import {urls} from "../constants/urls";

let axiosInstance = axios.create({
    baseURL: urls.baseUrl,
    headers : {
        "Content-Type" : "application/json"
    }
})

export {
    axiosInstance
}