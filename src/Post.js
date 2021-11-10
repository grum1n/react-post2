import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className="post">
            <Link to={`/post/${post.id}`}>
                <h2>{post.id} . {post.title}</h2>
            </Link>
        </article>
    )
}

export default Post;
