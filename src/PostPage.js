import { useParams } from "react-router-dom";

const PostPage = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    
    return (
        <main className="PostPage">
            <article>
                <h2>{post.id}. {post.title}</h2>
                <p>{post.text}</p>
            </article>
        </main>
    )
}

export default PostPage;