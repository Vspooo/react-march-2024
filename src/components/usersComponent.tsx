import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/basic-models/userModel";
import {userApiService} from "../services/user.api.service";
import UserComponent from "./userComponent";
import {IPostModel} from "../models/basic-models/postModel";
import PostComponent from "./postComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
     userApiService.getAllUsers().then(value => setUsers(value.data.users))
    }, []);

    let getPosts = (id:number) => {
        userApiService.getPostsByUserId(id).then(posts => setPosts(posts.data.posts))
        console.log(posts)
    }

    const hasPosts = (posts: IPostModel[]) => {
        return posts.length > 0;
    };
    return(
        <div>
            {
                users.map((user) => <UserComponent user={user} key={user.id} getPosts={getPosts}/>)
            }
            <hr/>
            <div>
                {hasPosts(posts) ? (<PostComponent posts={posts}/>) : (<h3>There are no posts</h3>)}

            </div>
        </div>
    )
};

export default UsersComponent;