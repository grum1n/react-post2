import Header from './Header';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Footer from './Footer';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from './api/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchPosts();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = { id, title: postTitle, text: postText };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostText('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <>
    <div className="site-header">
      <Header title="Home Page" />
    </div>
    <div className="row">
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/post">
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postText={postText}
            setPostText={setPostText}
          />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} />
        </Route>
      </Switch>
      <Footer />
    </div>
    </div>
    </>
  );
}

export default App;