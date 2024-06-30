import React, {FC} from 'react';
import {IPostModel} from "../models/basic-models/postModel";


interface IProps{
    posts : IPostModel[]
}
const PostComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post=> <div key={post.id}>
                <h1>{post.id}: {post.title}</h1>
                <h4>{post.body}</h4>
                <ul>
                    {post.tags.length > 0 ?(
                        post.tags.map((tag,index) => <li key={index}>{tag}</li>)
                    ) : (
                        <h3>there is no posts available</h3>
                    )}
                </ul>
            </div>)}
        </div>
    );
};

export default PostComponent;