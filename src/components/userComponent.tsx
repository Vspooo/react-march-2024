import React, {FC} from 'react';
import {IUserModel} from "../models/basic-models/userModel";

interface IProps{
    user:IUserModel
    getPosts: (id:number) => void
}

const UserComponent:FC<IProps> = ({user,getPosts}) => {
    return (
        <div>
         <h2> {user.id} : {user.firstName} {user.maidenName} {user.lastName}. {user.age}. {user.gender}</h2>
         <p> {user.email} or {user.phone}</p>
         <button onClick={()=>{
             getPosts(user.id)
         }}>show more</button>
        </div>
    );
};

export default UserComponent;