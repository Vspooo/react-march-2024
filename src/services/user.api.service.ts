import {axiosInstance} from "./axios";
import {urls} from "../constants/urls";
import {AxiosResponse} from "axios";
import {IUserResponseModel} from "../models/response-models/userResponseModel";
import {IPostsModel} from "../models/basic-models/postsModel";

type ResponseType<T> = Promise<AxiosResponse<T>>


const userApiService = {
    getAllUsers : () :ResponseType<IUserResponseModel> => axiosInstance.get(urls.user),
    getPostsByUserId : (id:number) : ResponseType<IPostsModel> => axiosInstance.get(urls.posts + id)
}

export {
userApiService
}