import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="App">
      <div className="form">
        <PostForm />
      </div>
      <div className="posts">
        <h2>Sync posts</h2>
        <Posts/>
      </div>

      <div className="fetched-posts">
        <h2>Fetched posts</h2>
        <FetchedPosts />
      </div>
    </div>
  );
}

export default App;
