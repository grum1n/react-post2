import React from 'react';

const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postText, setPostText
}) => {
    return (
        <main className="NewPost">
            
            <form className="newPostForm section-heading" onSubmit={handleSubmit}>
                <h3>Add New Post</h3>
                <div className="form-inner">
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input 
                            id="postTitle"
                            type="text"
                            required
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postText">Post:</label>
                        <textarea 
                            id="postText"
                            required
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)} 
                        />
                    </div>
                </div>   
                <button className="add-button" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost;