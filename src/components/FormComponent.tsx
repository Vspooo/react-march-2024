import React from 'react';
import {useForm} from "react-hook-form";
import {IPostModel} from "../models/PostModel";

const FormComponent = () => {

    const save = (data:IPostModel) => {
        console.log(data)
    }

    const {register, handleSubmit} = useForm<IPostModel>();
    
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} {...register("title")} placeholder={"title"}/>
                <input type={"text"} {...register("body")} placeholder={"body"}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;