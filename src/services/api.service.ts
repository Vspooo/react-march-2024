import axios, {AxiosResponse} from "axios";
import {urls} from "../urls/urls";


type IRes<T> = Promise<AxiosResponse<T>>
const axiosInstance = axios.create({baseURL:urls.baseURL});

const apiService = {
    savePost : () => axiosInstance.post(urls.posts)
}
